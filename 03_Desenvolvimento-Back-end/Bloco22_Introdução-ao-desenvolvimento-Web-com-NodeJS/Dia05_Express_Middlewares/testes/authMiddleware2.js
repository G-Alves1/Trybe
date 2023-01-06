const validUsers = [
  { username: 'teste', password: 'teste123' },
  { username: 'teste1', password: 'teste123' },
  { username: 'teste2', password: 'teste123' },
  { username: 'teste3', password: 'teste123' },
];

const authMiddleware2 = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.

  next();
};

module.exports = authMiddleware2;
