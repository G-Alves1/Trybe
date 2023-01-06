module.exports = (req, res, next) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress } = req.body;

  if (!passengerId) return res.status(400).json({ message: '"passengerId" not passed' });
  if (!startingAddress || !endingAddress) {
    return res.status(400).json({ message: 'fields not passed' });
  }

  return next();
};
