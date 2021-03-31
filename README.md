# Caballero-Meal-Planner
An Express Meal Planning App

**Description**
This application uses Express and Sequelize to create API functionality which allows a user to Create, Read, Update, and Delete entries from a SQLITE database. The database holds meals which include a title, time, ingredients, and instructions. The only reuired field when creating a new meal in the database is the "title". This repo includes a Postman collection with examples to facilitate testing.

**Instructions to Run**
1. clone git repo to a local folder
2. open a terminal and navigate to the local folder
3. type "npm install"
4. type "npm start"

**Using Postman to test**
1. open Postman and import "Caballero-Meal-Planner.postman_collection.json"
2. The postman collection includes a call to seed the database as well as test data for all api calls.

**Intructions for Unit Test**
1. clone git repo to a local folder
2. open a terminal and navigate to the local folder
3. type "npm install"
4. type "npm test"
5. There is a 5 second delay while the database initializes then all tests will run.

*API Endpoints*
**CREATE MEAL**
    POST http://localhost:3000/api/meals
        notes: Creates meal(s) in the database based on a meal in the body as JSON or an array of many meals. "title" field is required.
        body example:
            {
                "title": "Mexi Bowl",
                "time": "30min",
                "ingredients": "rice, beans, peppers, onion, chorizo, avocado, cheese",
                "instructions": "Cook rice. Cook beans. Pan fry peppers, onions, and chorizo. Serve in a bowl topped with sliced avocado and cheese."
            }

**READ ALL MEALS**
    GET http://localhost:3000/api/meals/
        notes: Returns all meals from database

**READ MEAL BY ID**
    GET http://localhost:3000/api/meals/{id}
        notes: Returns a single meal from database based on a valid {id}

**UPDATE MEAL BY ID**
    PUT http://localhost:3000/api/meals/{id}
        notes: Updates a single meal in the database based on a valid {id}. All fields included in the body are updated.

**DELETE MEAL BY ID**
    DELETE http://localhost:3000/api/meals/{id}
        notes: Deletes a single meal from database based on a valid {id}
