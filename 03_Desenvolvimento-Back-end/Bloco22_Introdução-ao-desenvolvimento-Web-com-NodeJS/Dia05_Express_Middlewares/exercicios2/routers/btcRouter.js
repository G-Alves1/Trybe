/*******2*******/
const express = require('express');
const axios = require('axios');
const btc_api = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const router = express.Router();

const {
  validateToken
} = require('../middlewares/validations');

router.get('/price', validateToken, async (_req, res) => {
  const result = await axios.get(btc_api);
  
  res.status(200).json(result.data);
});

module.exports = router;
