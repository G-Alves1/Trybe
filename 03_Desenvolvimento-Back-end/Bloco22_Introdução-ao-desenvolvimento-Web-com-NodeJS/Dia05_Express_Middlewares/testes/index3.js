const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação
app.get('/open', (_req, res) => {
  res.send('open!')
});

const recipesRouterToIndex3 = require('./recipesRouterToIndex3');

// Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador.
app.use('/recipes', recipesRouterToIndex3);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
 });
 
app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

 app.listen(3001, () => {
   console.log('Aplicação ouvindo na porta 3001');
 });
 