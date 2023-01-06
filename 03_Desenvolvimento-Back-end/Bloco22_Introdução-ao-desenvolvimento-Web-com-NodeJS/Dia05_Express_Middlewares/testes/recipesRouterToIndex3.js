const express = require('express');
const authMiddleware = require('./authMiddleware');

const router = express.Router();

router.use(authMiddleware);

// Para enviar parâmetros no header usar o formato <chave>:<valor>
// username:teste password:teste123

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid name!'});
  };

  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if(typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid price!'});
  };

  next();
};

router.get('/', (_req, res) => {
  res.status(200).json(recipes);
});

router.post('/', validateName, validatePrice, (req, res) => {
  const { id, name, price } = req.body;

  recipes.push({ id, name, price});

  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipesIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));

  if(recipesIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' });
  };

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

module.exports = router;
