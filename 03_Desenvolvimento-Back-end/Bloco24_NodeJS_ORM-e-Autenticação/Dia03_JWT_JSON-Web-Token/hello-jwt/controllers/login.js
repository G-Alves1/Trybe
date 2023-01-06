const service = require('../services/User');
const { validateCredentials } = require('./utils/validateCredentials');

module.exports = async (req, res, next) => {
  const { error } = validateCredentials(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const { error: serviceError, token } = await service.login(username, password);

  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  if (serviceError) {
    return next(serviceError);
  }

  res.status(200).json({ token });
};