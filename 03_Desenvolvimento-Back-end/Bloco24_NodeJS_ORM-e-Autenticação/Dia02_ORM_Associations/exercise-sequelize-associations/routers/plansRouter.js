const express = require('express');
const { getAll } = require('../controllers/plansController');

const router = express.Router();

router.get('/:id', getAll);

module.exports = router;
