const express = require('express');
const router = express.Router();

router.get('/api', (req, res, next) => {
    res.json("This is the initial GET response.")
  });

module.exports = router;