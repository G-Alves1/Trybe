module.exports = (req, res, next) => {
    const { model, color, licensePlate } = req.body;
  
    if (!model) return res.status(400).json({ message: '"model" is required' });
    if (!color) return res.status(400).json({ message: '"color" is required' });
    if (!licensePlate) {
      return res.status(400).json({ message: '"licensePlate" is required' });
    }
  
    return next();
  };