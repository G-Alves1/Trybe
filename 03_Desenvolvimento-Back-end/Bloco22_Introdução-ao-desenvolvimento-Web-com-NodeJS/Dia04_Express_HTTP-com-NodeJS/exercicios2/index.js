const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

/*******1*******/
app.get('/drinks', (_req, res) => {
  res.status(200).json(drinks);
});

/*******3*******/
app.get('/drinks/search', (req, res) => {
  const { name } = req.query;

  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));

  res.status(200).json(filteredDrinks);
});

/*******2*******/
app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

/*******4*******/
app.post('/drinks', (req, res) => {
  const { name, price } = req.body;

  drinks.push({ id: drinks.length+1, name, price });

  res.send(`${name} com o valor R$ ${price} adicionado com sucesso!`);
});

/*******5*******/
app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

/*******6*******/
app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

/*******7*******/
app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
