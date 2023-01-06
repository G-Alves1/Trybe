import express from 'express';
import postsRouter from './routes/postsRouter';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
