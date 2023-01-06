const { carModel } = require('../models');
const { validateNewCar } = require('./validations/validations-exercises');

const createCar = async (model, color, licensePlate) => {
  const error = validateNewCar(model, color, licensePlate);
  if (error.type) return error;

  const newCar = await carModel.insert({ model, color, licensePlate });
  return { type: null, message: newCar };
};

module.exports = {
  createCar,
};