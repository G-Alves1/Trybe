const { Patient, Plan } = require('../models');

const getAll = async (req, res) => {
  try {
    const allPlans = await Plan.findAll(
      {
        where: { plan_id: req.params.id },
        include: [{ model: Patient, as: 'patients' }]
      }
    )

    if (!allPlans.length) {
      return res.status(404).send({ message: 'No plan found' });
    }

    res.status(200).json(allPlans);
  } catch (err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
};