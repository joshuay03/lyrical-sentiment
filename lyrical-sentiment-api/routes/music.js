const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');
const languageController = require('../controllers/languageController');

router.get('/lyrics',
  musicController.get,
  languageController.search,
  (req, res) => {
    res.status(200).json();
  }
);

module.exports = router;
