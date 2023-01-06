const express = require('express');
const passengerController = require('../controllers/passenger.controller');

const validateRequestTravelSchema = require('../middlewares/validatePassengerFields');

const router = express.Router();

router.post(
  '/:passengerId/request/travel',
  validateRequestTravelSchema,
  passengerController.createTravel,
);

module.exports = router;
