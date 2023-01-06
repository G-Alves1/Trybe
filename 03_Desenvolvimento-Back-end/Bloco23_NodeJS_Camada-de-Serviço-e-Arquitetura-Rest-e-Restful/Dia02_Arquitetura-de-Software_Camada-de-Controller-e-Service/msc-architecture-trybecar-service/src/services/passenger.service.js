const { passengerModel, waypointModel, travelModel } = require('../models');
const { validateRequestTravelSchema } = require('./validations/validationsInputValues');

const isPassengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => {
      await waypointModel.insert({
        address: value.address,
        stopOrder: value.stopOrder,
        travelId,
      });
    });
  }

  return [];
};

const requestTravel = async (passengerId, startingAddress, endingAddress, waypoints) => {
  const validationResult = validateRequestTravelSchema(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );

  if (validationResult.type) return validationResult;
  
  if (await isPassengerExists(passengerId)) {
    const travelId = await travelModel.insert({
      passengerId,
      startingAddress,
      endingAddress,
    });

    await Promise.all(saveWaypoints(waypoints, travelId));
    const travel = await travelModel.findById(travelId);
    return { type: null, message: travel };
  }
};

module.exports = {
requestTravel,
};
