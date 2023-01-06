const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', booksController.create);
router.post('/:id', booksController.update);
router.delete('/:id', booksController.destroy);
router.get('/author/:name', booksController.getByAuthorName);

module.exports = router;
