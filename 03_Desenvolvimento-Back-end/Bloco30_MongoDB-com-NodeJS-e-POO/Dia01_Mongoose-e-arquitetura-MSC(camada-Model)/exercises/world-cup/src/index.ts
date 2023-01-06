import App from './app';

const app = new App().express;

app.listen(3000, () => console.log('Ouvindo na porta 3000'));