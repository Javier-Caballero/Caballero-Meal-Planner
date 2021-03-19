const express = require('express');
const meals = require('./routes/meals');
const app = express();

app.use('/', meals);

app.listen(3000, () => {
    console.log('Caballero Meal Planner listening on port 3000');
});   