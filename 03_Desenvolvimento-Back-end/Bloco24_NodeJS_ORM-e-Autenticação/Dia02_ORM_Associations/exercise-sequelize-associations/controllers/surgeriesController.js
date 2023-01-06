const { Patient, Surgery } = require('../models');

const getDoctor = async (req, res) => {
  try {
    const allSurgeries = await Surgery.findAll(
      {
        where: { doctor: req.params.name },
        include: [{
          model: Patient,
          as: 'patients',
          through: { attributes: [] }
        }]
      }
    )

    if (allSurgeries === null) {
      return res.status(404).send({ message: 'No plan found' });
    }

    return res.status(200).json(allSurgeries);
  } catch (err) {
    res.status(500).json({ message: 'Algo deu errado' })
  }
}

module.exports = {
  getDoctor
};