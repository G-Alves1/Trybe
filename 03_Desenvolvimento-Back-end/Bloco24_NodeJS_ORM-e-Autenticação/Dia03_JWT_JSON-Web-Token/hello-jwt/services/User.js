const model = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (username, password) => {
  const user = await model.findOne(username);

  if (!user || user.password !== password) {
    return {
      error: {
        code: 'invalidCredentials',
        message: 'Invalid username or password',
      },
    };
  }

  const payload = {
    username,
    admin: user.admin,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
};

const create = async (username, password) => {
  const userExists = await model.findOne(username);

  if (userExists) {
    return {
      error: {
        message: 'Username already exists',
        code: 'usernameExists',
      },
    };
  }

  const admin = Math.floor(Math.random() * 100) > 50;

  await model.save({ username, password, admin });

  return login(username, password);
};

module.exports = {
  create,
  login,
};