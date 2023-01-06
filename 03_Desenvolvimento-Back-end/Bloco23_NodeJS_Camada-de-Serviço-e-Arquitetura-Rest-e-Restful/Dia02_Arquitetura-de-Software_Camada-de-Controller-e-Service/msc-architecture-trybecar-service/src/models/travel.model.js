const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );
  return camelize(result);
};

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );
  return camelize(result);
};

const updateById = async (travelId, dataToUpdate) => {
  const formattedColumns = Object.keys(snakeize(dataToUpdate))
    .map((key) => `${key} = ?`)
    .join(', ');
  
    return connection.execute(
      `UPDATE travels SET ${formattedColumns} WHERE id = ?`,
      [...Object.values(dataToUpdate), travelId],
    );
};

module.exports = {
  insert,
  findById,
  findByTravelStatusId,
  updateById,
};
