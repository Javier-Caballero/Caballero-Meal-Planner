const express = require('express');
const router = express.Router();



router.get('/api/meals', (req, res, next) => {
  res.json("This is the GET meals response.")
});

router.post('/api/meals', (req, res, next) => {
  res.json("This is the POST meals response.")
});

router.put('/api/meals', (req, res, next) => {
  res.json("This is the PUT meals response.")
});

router.delete('/api/meals', (req, res, next) => {
  res.json("This is the DELETE meals response.")
});


module.exports = router;