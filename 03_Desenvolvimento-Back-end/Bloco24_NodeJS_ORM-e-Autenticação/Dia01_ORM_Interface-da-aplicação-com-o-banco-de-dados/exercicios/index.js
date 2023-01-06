const express = require('express');
const bodyParser = require('body-parser');

const bookRouter = require('./routers/bookRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/book', bookRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;