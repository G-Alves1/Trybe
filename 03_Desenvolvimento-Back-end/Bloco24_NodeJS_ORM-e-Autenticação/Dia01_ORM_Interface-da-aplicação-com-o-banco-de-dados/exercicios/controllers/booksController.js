const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll({ order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]});

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const books = await bookService.getById(id);

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const book = await bookService.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { id } =  req.params;
    const { title, author, pageQuantity } = req.body;

    const result = await bookService.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200).json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const bookToDelete = await bookService.getById(id);

    await bookToDelete.destroy();

    res.status(200).json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getByAuthorName = async (req, res) => {
  try {
    const { name } = req.params;

    const books = await bookService.getByAuthorName(name);

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getByAuthorName,
};