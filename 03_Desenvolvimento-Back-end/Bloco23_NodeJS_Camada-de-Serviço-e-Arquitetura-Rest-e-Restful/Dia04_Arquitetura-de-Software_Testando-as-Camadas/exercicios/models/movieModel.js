const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const getById = async (id) => {
  try {
    const query = 'SELECT * FROM model_example.movies WHERE id = ?';
    const [movie] = await connection.execute(query, [id]);

    if (!movie.length) return null

    return movie[0];
  } catch (err) {
    console.error(err);
    
    return process.exit(1);
  }
};

module.exports = {
  create,
  getById
};