const express = require('express');
const { driverService } = require('../services');
const driverController = require('../controllers/driver.controller');
const validateDriverNameField = require('../middlewares/validateDriverNameField');

const router = express.Router();

router.get(
    '/',
    driverController.getDrivers,
);

router.post(
    '/',
    validateDriverNameField,
    driverController.createDriver,
);

router.get('/open/travels', driverController.openTravel);

router.put('/:driverId/travels/:travelId/assign', async (req, res) => {
    const { travelId, driverId } = req.params;
    const { type, message } = await driverService.travelAssign({ travelId, driverId });
    if (type) return res.status(type).json(message);

    res.status(200).json(message);
});

router.put('/:driverId/travels/:travelId/start', async (req, res) => {
    const { travelId, driverId } = req.params;
    const { type, message } = await driverService.startTravel({ travelId, driverId });
    if (type) return res.status(type).json(message);

    res.status(200).json(message);
});

router.put('/:driverId/travels/:travelId/end', async (req, res) => {
    const { travelId, driverId } = req.params;
    const { type, message } = await driverService.endTravel({ travelId, driverId });
    if (type) return res.status(type).json(message);

    res.status(200).json(message);
});

module.exports = router;
