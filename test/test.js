const app = require('../app.js');
const expect = require('chai').expect;

const db = require('../db');
const Meal = require('../db/models/meal');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);
const apiRequest = chai.request(app).keepOpen();

describe('Meal Planner API Testing', function(){
  
  const createMeal = {
    "title": "Mexi Bowl",
    "time": "30min",
    "ingredients": "rice, beans, peppers, onion, chorizo, avocado, cheese",
    "instructions": "Cook rice. Cook beans. Pan fry peppers, onions, and chorizo. Serve in a bowl topped with sliced avocado and cheese."
    };

  const updateMeal = {
    "title": "Mexi Bowl UPDATED",
    "time": "30min UPDATED",
    "ingredients": "rice, beans, peppers, onion, chorizo, avocado, cheese, UPDATED",
    "instructions": "Cook rice. Cook beans. Pan fry peppers, onions, and chorizo. Serve in a bowl topped with sliced avocado and cheese. UPDATED"
    };

  before(function(done) {
    this.timeout(6000);
    setTimeout(done, 5000); //wait for database to initialize
  });

  after(function(done) {
    apiRequest.close();
    done();
  });

  describe('POST /api/meals', function(){
    it('should create a meal in the database', (done) => {
      apiRequest.post('/api/meals')
        .send(createMeal)
        .end((err, res) => {
          //console.log(res.body);
          expect(res.body).to.deep.equal({ message: "Meal 1 : 'Mexi Bowl' has been created successfully." });
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('GET /api/meals', () => {
    it('should read all meals in the database', (done) => {
      apiRequest.get('/api/meals')
        .end((err, res) => {
          //console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
        });
    });
  });

  describe('PUT /api/meals/1', function(){
    it('should update a meal in the database', (done) => {
      apiRequest.put('/api/meals/1')
        .send(updateMeal)
        .end((err, res) => {
          //console.log(res.body);
          expect(res.body).to.deep.equal({ "message": "Meal 1 : 'Mexi Bowl UPDATED' has been updated successfully." });
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('DELETE /api/meals/1', function(){
    it('should delete a meal from the database', (done) => {
      apiRequest.delete('/api/meals/1')
        .send()
        .end((err, res) => {
          //console.log(res.body);
          expect(res.body).to.deep.equal({ "message": "Meal 1 : 'Mexi Bowl UPDATED' has been deleted successfully." });
          expect(res).to.have.status(200);
          done();
        });
    });
  });

});
