const express = require('express');
const router = express.Router();
const languageController = require('../controllers/musicController');

router.get('/sentiment', languageController.get);

module.exports = router;
