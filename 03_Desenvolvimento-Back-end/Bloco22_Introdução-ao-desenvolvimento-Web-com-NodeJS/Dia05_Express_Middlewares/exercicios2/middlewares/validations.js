/*******1*******/
const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if(!username || username.length < 3) {
    return res.status(400).json({ "message": "invalid data" });
  };

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body

  if(!email || !email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ "message": "invalid data" });
  };

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const passwordRegex = /^[0-9]*$/;

  if(password.length < 4 ||  password.length > 8 || !password.match(passwordRegex)) {
    return res.status(400).json({ "message": "invalid data" });
  };

  next();
};

/*******2*******/
const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  if (!authorization || authorization.match(tokenRegex)) {
    return res.status(401).json({ "message": "invalid token" });
  };

  next();
};

/*******4*******/
const validateTeam = (req, res, next) => {
  const { name, initials, country } = req.body;

  if (!name || name.length < 5 || !initials || initials.length > 3 || !country || country.length < 3) {
    return res.status(400).json({ "message": "invalid data" });
  };

  next();
};

/***************/
module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
  validateToken,
  validateTeam
};
