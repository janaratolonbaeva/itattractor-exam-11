const express = require('express');
const Categories = require('../models/Category');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Categories.find();
    res.send(categories);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;