const camelize = require('camelize');
const connection = require('./connection');

const findById = async (passengerId) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );
  return camelize(passenger);
};

module.exports = {
  findById,
};