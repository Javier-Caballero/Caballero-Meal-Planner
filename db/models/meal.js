'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Meal extends Sequelize.Model {
      publishedAt() {
          const date = moment(this.createdAt).format('MMMM D, YYYY, h:mma');
          return date;
      }
      shortDescription() {
          const shortDesc = this.body.length > 200 ? this.body.substring(0, 200) + '...' : this.body;
          return shortDesc;
      }
  }
  Meal.init({
    title: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: '"Title" is required'
          }
        }
      },
    
    time: Sequelize.STRING,
    ingredients: Sequelize.TEXT,
    instructions: Sequelize.TEXT
  }, { sequelize });

  return Meal;
};