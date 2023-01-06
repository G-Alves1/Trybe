const express = require('express');
const bodyParser = require('body-parser');

const patientsRouter = require('./routers/patientsRouter');
const plansRouter = require('./routers/plansRouter');
const surgeriesRouter = require('./routers/surgeriesRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/patients', patientsRouter);
app.use('/plans', plansRouter);
app.use('/surgeries', surgeriesRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));