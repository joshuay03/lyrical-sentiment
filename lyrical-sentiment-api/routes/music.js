const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/lyrics', musicController.get);

module.exports = router;
