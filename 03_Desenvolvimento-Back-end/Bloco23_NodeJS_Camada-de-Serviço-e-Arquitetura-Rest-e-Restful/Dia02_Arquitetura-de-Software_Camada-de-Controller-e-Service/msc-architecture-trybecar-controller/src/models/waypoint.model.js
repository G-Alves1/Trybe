const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (waypoint) => {
  const columns = Object.keys(snakeize(waypoint))
    .map((key) => `${key}`)
    .join(',');

  const placeholders = Object.keys(waypoint)
    .map((_key) => '?')
    .join(',');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO waypoints (${columns}) VALUE (${placeholders})`,
    [...Object.values(waypoint)],
  );

  return insertId;
};

module.exports = {
  insert,
};