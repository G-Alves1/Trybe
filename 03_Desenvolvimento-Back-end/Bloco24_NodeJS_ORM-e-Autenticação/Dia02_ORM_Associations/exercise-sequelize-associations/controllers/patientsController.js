const { Patient, Plan, Surgery } = require('../models');

const getAllPlans = async (_req, res) => {
  try {
    const allPatients = await Patient.findAll(
      { include: { model: Plan, as: 'plans' } }
    );
    
    if (!allPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    
    res.status(200).json(allPatients);
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getAllSurgeries = async (_req, res) => {
  try {
    const allPatients = await Patient.findAll(
      {
        include: {
          model: Surgery,
          as: 'surgeries',
          through: { attributes: [] }
        }
      }
    );
    
    if (!allPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }

    res.status(200).json(allPatients);
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getSurgeriesNoDoctor = async (_req, res) => {
  try {
    const allPatients = await Patient.findAll(
      {
        include: {
          model: Surgery,
          as: 'surgeries',
          attributes: { exclude: ['doctor'] },
          through: { attributes: [] }
        }
      }
    );

    if (allPatients === null) {
      return res.status(404).send({ message: 'No patients found' });
    }

    res.status(200).json(allPatients);
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;
    
    const newPatient = await Patient.create({ fullname, plan_id });

    res.status(200).json(newPatient);
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado' })
  }
};

module.exports = {
  getAllPlans,
  getAllSurgeries,
  getSurgeriesNoDoctor,
  create,
};