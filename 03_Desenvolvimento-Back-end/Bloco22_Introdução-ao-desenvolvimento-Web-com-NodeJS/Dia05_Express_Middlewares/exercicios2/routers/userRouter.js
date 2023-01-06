/*******1*******/
const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const {
  validateUsername,
  validateEmail,
  validatePassword
} = require('../middlewares/validations');

router.post(
  '/register',
  validateUsername,
  validateEmail,
  validatePassword,
  (_req, res) => {
    res.status(201).json({ message: 'user created' });
  }
);

router.post(
  '/login',
  validateEmail,
  validatePassword,
  (_req, res) => {
    const token = crypto.randomBytes(6).toString('hex');
    res.status(200).json({ token });
  }
);

module.exports = router;