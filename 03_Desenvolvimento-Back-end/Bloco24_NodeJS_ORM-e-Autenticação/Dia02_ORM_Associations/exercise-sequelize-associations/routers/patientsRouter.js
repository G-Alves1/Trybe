const express = require('express');
const {
  getAllPlans,
  getAllSurgeries,
  getSurgeriesNoDoctor,
  create,
} = require('../controllers/patientsController');

const router = express.Router();

router.post('/', create)
router.get('/plans', getAllPlans);
router.get('/surgeries', getAllSurgeries);
router.get('/surgeries/nodoctor', getSurgeriesNoDoctor);

module.exports = router;
