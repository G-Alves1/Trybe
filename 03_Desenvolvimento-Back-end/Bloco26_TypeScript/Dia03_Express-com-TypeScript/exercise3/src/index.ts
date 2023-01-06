import express from 'express';

import router from './routes/routes';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/products', router);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
