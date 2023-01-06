const connection = require('./database/connection');

const findAll = async () => {
  const [result] = await connection.execute(
  'SELECT * FROM drivers',
  );

  return result;
};

const findById = async (driverId) => {
  const [[result]] = await connection.execute(
  'SELECT * FROM drivers WHERE id = ?',
  [driverId],
  );

  return result;
};

const insert = async (driver) => {
  const [{ insertId }] = await connection.execute(
  'INSERT INTO drivers (name) VALUE (?)',
  [driver.name],
  );

  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};