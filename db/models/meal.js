const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Meal extends Sequelize.Model {}
  Meal.init({
  title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: '"Title" is required'
        },
        notNull: {
          msg: '"Title" is required',
        },
      }
    },
  
  time: Sequelize.STRING,
  ingredients: Sequelize.TEXT,
  instructions: Sequelize.TEXT
}, { sequelize });


  return Meal;
};