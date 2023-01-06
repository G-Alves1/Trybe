import express from 'express';
import router from './routes/router';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/restaurants', router);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
