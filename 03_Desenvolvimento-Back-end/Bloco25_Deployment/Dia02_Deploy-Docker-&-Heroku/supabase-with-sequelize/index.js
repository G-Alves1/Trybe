const express = require('express')

const { Product } = require('./models')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.post('/product', async (req, res) => {

  const { name, description } = req.body;

  const product = await Product.create({ name, description });

  return res.status(201).json(product);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));