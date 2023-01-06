const express = require('express');
const { getDoctor } = require('../controllers/surgeriesController');

const router = express.Router();

router.get('/:name', getDoctor);

module.exports = router;
