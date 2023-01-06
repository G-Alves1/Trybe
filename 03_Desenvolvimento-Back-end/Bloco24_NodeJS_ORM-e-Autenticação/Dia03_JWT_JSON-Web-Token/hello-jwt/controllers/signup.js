const { validateCredentials } = require('./utils/validateCredentials');

const service = require('../services/User');

module.exports = async (req, res, next) => {
  const { error: validationError } = validateCredentials(req.body);

  if (validationError) {
    return next(validationError);
  }

  const { username, password } = req.body;

  const result = await service.create(username, password);

  if (!result.error) {
    return res.status(201).json(result);
  }

  if (result.error.code === 'usernameExists') {
    return res.status(409).json({ message: result.error.message });
  }
};