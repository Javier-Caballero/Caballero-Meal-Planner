const express = require('express');
const router = express.Router();
const db = require('../db');
const { Meal } = db.models;

router.use(express.json());

function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(err => err.message);
        console.error('Validation errors: ', errors);
      } else {
        throw error;
      }
      next(error);
    }
  }
}

router.get('/api/meals/:id', asyncHandler(async (req, res, next) => {
  const meal = await Meal.findByPk(req.params.id);
  res.json(meal)
}));

router.get('/api/meals/', asyncHandler(async (req, res, next) => {
  const meals = await Meal.findAll();
  res.json(meals.map(meal => meal.toJSON()))
}));

router.post('/api/meals', asyncHandler(async (req, res, next) => {
  const meal = await Meal.create(req.body);
  res.json(meal)
}));

router.put('/api/meals/:id', asyncHandler(async (req, res, next) => {
  const meal = await Meal.create(req.body);
  res.json(meal)
}));

router.delete('/api/meals/:id', asyncHandler(async (req, res, next) => {
  const meal = await Meal.create(req.body);
  res.json(meal)
}));


module.exports = router;