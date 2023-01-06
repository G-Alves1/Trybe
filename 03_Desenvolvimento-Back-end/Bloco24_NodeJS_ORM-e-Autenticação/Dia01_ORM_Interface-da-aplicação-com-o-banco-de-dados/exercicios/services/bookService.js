const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
}

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create(title, author, pageQuantity);

  return newBook;
}

const update = async (id, title, author, pageQuantity) => {
  const book = await Book.update(id, title, author, pageQuantity);

  return book;
}

const destroy = async (id) => {
  const book = await Book.findByPk(id);

  await book.destroy();

  return book;
}

const getByAuthorName = async (name) => {
  const book = await Book.findAll({ where: { author: name } });

  return book
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getByAuthorName,
};