const { passengerService } = require('../services');
const errorMap = require('../utils/errorMap');

const createTravel = async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const { type, message } = await passengerService.requestTravel(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};

module.exports = {
  createTravel,
};
