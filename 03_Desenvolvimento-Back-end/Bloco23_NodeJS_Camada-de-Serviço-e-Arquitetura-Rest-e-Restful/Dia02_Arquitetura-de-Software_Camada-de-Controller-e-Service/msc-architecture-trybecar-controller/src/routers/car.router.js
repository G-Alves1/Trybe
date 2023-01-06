const express = require('express');
const { carController } = require('../controllers');
const validateCarFields = require('../middlewares/validateCarFields');

const router = express.Router();

router.post(
  '/',
  validateCarFields,
  carController.createCar
);

module.exports = router;