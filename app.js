const express = require('express');
const db = require('./db');
const router = require('./routes');
const app = express();

const { Meal } = db.models;

//app.use(express.json());

app.use('/', router);

(async () => {
    await db.sequelize.sync({ force: true });

    try {
    const meal = await Meal.create({
        title: 'Mexi Bowl'
    });
    console.log(meal.toJSON());

    const meal2 = await Meal.create({
        title: 'Broccoli Bowl'
    });
    console.log(meal2.toJSON());

    } catch (error) {
    console.error('Error connecting to the database: ', error);
    }
})();

app.listen(3000, () => {
    console.log('Caballero Meal Planner listening on port 3000');
});