const express = require('express');
const { processFunction } = require('../controllers/booleanController');
const router = express.Router();

router.post('/process', processFunction);

module.exports = router;