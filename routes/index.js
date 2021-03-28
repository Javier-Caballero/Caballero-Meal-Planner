const express = require('express');
const router = express.Router();
const db = require('../db');
const { Meal } = db.models;

router.use(express.json());

function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error) {
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(err => err.message);
        console.error('Validation errors: ', errors);
      } else {
        throw error;
      }
      res.json({message: error.message})
    }
  }
}

router.get('/api/meals/:id', asyncHandler(async (req, res, next) => {
  const meal = await Meal.findByPk(req.params.id);
  if(meal) {
    res.json(meal)
  } else {
    res.sendStatus(404);
  }
}));

router.get('/api/meals/', asyncHandler(async (req, res, next) => {
  const meals = await Meal.findAll();
  res.json(meals.map(meal => meal.toJSON()))
}));

router.post('/api/meals', asyncHandler(async (req, res, next) => {
  const body = req.body;
  if (Array.isArray(body)) {
    await body.map(meal => Meal.create(meal)) 
    res.json({message: `Meals have been created successfully.`})
  } else {
    const meal = await Meal.create(req.body);
    res.json({message: `Meal ${meal.id} : '${meal.title}' has been created successfully.`})
  }
}));

router.put('/api/meals/:id', asyncHandler(async (req, res, next) => {
  const meal = await Meal.findByPk(req.params.id);
  if(meal) {
    await meal.update(req.body);
    res.json({message: `Meal ${meal.id} : '${meal.title}' has been updated successfully.`})
  } else {
    res.sendStatus(404);
  }
}));

router.delete('/api/meals/:id', asyncHandler(async (req, res, next) => {
  const meal = await Meal.findByPk(req.params.id);
  if(meal) {
    await meal.destroy();
    res.json({message: `Meal ${meal.id} : '${meal.title}' has been deleted successfully.`})
  } else {
    res.sendStatus(404);
  }
}));

module.exports = router;