const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routers/userRouter.js');
const btcRouter = require('./routers/btcRouter.js');
const postRouter = require('./routers/postRouter.js');
const teamRouter = require('./routers/teamRouter.js');

const errors = require('./middlewares/errors.js');

const app = express();

app.use(bodyParser.json());

/*******1*******/
app.use('/user', userRouter);

/*******2*******/
app.use('/btc', btcRouter);

/*******3*******/
app.use('/posts', postRouter);

/*******4*******/
app.use('/teams', teamRouter);

/***************/
app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

/*******3*******/
app.use(errors);

/***************/
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
