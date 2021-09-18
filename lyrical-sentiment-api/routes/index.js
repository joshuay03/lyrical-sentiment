const express = require('express');
const router = express.Router();
const musicRouter = require('./music');

router.use('/music', musicRouter);
router.use('/language', musicRouter);

module.exports = router;
