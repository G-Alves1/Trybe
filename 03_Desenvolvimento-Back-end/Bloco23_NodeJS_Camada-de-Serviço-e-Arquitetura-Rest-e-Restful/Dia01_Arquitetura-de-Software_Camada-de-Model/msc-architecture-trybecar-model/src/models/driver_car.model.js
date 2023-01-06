const connection = require('./database/connection');

const insert = async (driverCar) => {
  const [{ insertId }] = await connection.execute(
  'INSERT INTO drivers_cars (driver_id, car_id) VALUE (?, ?)',
  [driverCar.driverId, driverCar.carId], 
  );

  return insertId;
};

module.exports = {
  insert,
};