const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware2 = require('./authMiddleware2');

const app = express();

app.use(bodyParser.json());

app.get('/open', (_req, res) => {
  res.send('open!')
});

app.use(authMiddleware2);

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

app.get('/recipes', (_req, res) => {
  res.status(200).json(recipes);
});

app.post('/recipes', validateName, validatePrice, (req, res) => {
  const { id, name, price } = req.body;

  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  
  recipes.push({ id, name, price, chef: username });

  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipesIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));

  if(recipesIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' });
  };

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

app.all('*', (req, res) => {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
