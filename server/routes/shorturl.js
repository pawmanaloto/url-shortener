const express = require('express');
const router = express.Router();
const { generateShortURL } = require('../controllers/shorturlController');

// Generate URL
router.route('/').post(generateShortURL);

module.exports = router;
