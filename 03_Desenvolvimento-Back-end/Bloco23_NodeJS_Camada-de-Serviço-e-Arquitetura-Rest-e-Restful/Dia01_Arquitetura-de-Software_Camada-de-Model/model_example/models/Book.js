const connection = require('./connection');

const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));

};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?'
  const [ books ] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.getById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
[title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
};