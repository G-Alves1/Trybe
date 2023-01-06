const camelize = require('camelize');
const connection = require('./connection');

const findById = async (driverId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [driverId],
  );
  return camelize(result);
};

module.exports = {
  findById,
};