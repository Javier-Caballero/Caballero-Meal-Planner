const express = require('express');
const db = require('./db');
const router = require('./routes');
const app = express();

const { Meal } = db.models;

app.use('/', router);

(async () => {
    await db.sequelize.sync({ force: true });
})();

app.listen(3000, () => {
    console.log('Caballero Meal Planner listening on port 3000');
});