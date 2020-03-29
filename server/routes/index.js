const express = require('express');
const router = express.Router();
const { getFullURL } = require('../controllers/shorturlController');

// Get URL
router.route('/:shortUrl').get(getFullURL);

module.exports = router;
