const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const crypto = require('crypto');

const app = express();

const simpsonsUtility = require('./simpsonsUtility.js');

app.use(bodyParser.json());

/*******1*******/
app.get('/ping', (_req, res) => {
  res.json({ message: 'pong'});
});

/*******2*******/
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.json({ "message": `Hello, ${name}!` });
});

/*******3*******/
app.post('/greeting', (req, res) => {
  const { name, age } = req.body;

  if(parseInt(age) > 17) {
    return res.status(200).json({ "message": `Hello, ${name}!` });
  };

  res.status(401).json({ "message": "Unauthorized" });
});

/*******4*******/
app.put('/users/:name/:age',(req, res) => {
  const { name, age } = req.params;

  res.json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade`});
});

/*******6*******/
app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await simpsonsUtility.getSimpsons();

  res.status(200).json(simpsons);
}));

/*******7*******/
app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;

  const simpsons = await simpsonsUtility.getSimpsons();

  const findSimpsons = simpsons.find((simpson) => simpson.id === id);

  if(!findSimpsons) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(findSimpsons);
}));

/*******8*******/
app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await simpsonsUtility.getSimpsons();

  if (simpsons.map((simpson) => simpson.id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  };

  simpsons.push({ id, name });

  await simpsonsUtility.setSimpsons(simpsons);

  res.status(204).end();
}));

/*******9*******/
/*
app.use((req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ "message": 'Token inválido!' });
  }

  return next();
});
*/
/*******10*******/
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if(!email || !password || !firstName || !phone) {
    res.status(401).json({ "message": "missing fields"});
  };

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ "message": `token: ${token}`})
});

/***************/

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
