const express = require('express');
const { passengerRouter, driverRouter, carRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRouter);
app.use('/drivers', driverRouter);
app.use('/cars', carRouter);

module.exports = app;