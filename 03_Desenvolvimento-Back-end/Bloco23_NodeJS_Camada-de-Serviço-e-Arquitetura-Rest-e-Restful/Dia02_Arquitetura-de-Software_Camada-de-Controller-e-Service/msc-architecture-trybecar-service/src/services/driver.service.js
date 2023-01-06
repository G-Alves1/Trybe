const {
  travelModel,
  driverModel,
  driverCarModel,
  carModel,
} = require('../models');
const {
  validateInputValues,
  validateAlreadyDriver,
} = require('./validations/validationsInputValues');
const { validateNewDriver } = require('./validations/validations-exercises');

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: result }; 
};

/* Aceitar a viagem; */
const travelAssign = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  let error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Validar se o motorista que esta tentando pegar uma viagem, não esta em outra */
  error = await validateAlreadyDriver(travelId);
  if (error.type) return error;

  /* Alterar o status de "aguardando motorista" para "motorista a caminho" */
  await travelModel.updateById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

/* Iniciar a viagem; */
const startTravel = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Alterar o status de "motorista a caminho" para "viagem em andamento" */
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });

  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

/* Encerrar a viagem; */
const endTravel = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Alterar o status de "viagem em andamento" para "viagem finalizada" */
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });

  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

const getDrivers = async () => {
  const drivers = await driverModel.findAll();
  return { type: null, message: drivers };
};

const createDriver = async (name, carIds) => {
  const error = await validateNewDriver(name, carIds);
  if (error.type) return error;

  const newDriver = await driverModel.insert({ name });
  
  if (carIds && carIds.length > 0) {
    await Promise.all(carIds.map(
      async (carId) => driverCarModel.insert({ driverId: newDriver.id, carId }),
    ));
    newDriver.cars = await Promise.all(
      carIds.map(async (carId) => carModel.findById(carId)),
    );
  } else {
    newDriver.cars = [];
  }

  return { type: null, message: newDriver };
};

module.exports = {
  travelAssign,
  startTravel,
  endTravel,
  getWaitingDriverTravels,
  getDrivers,
  createDriver,
};
