const express = require('express');

const router = express.Router();

const {
  readContentFile,
  writeContentFile,
} = require('../helpers/readWriteFile');

const {
  validateTeam
} = require('../middlewares/validations');

const teamsData = './teamsData.json';

router.get('/', async(_req, res) => {
  const teams = await readContentFile(teamsData);

  res.status(200).json({ teams });
});

router.post('/', validateTeam, async(req, res,) => {
  const { initials } = req.body;

  const teams = await readContentFile(teamsData);

  const newTeam = {
      ...req.body,
      initials: initials.toUpperCase(),
  };

  const newDataTeam = [...teams, newTeam];

  await writeContentFile(teamsData, newDataTeam);

  res.status(200).json(newTeam);
});

module.exports = router;
