const express = require('express');
const router = express.Router();
const { checkAndSaveMutant } = require('../controllers/mutant');

router.post('/', checkAndSaveMutant);

module.exports = router;
