const validModel = 'Chevrolet Monza';
const validColor = 'Branco';
const validPlate = 'ABC1A2B';

const typeError = 'INVALID_VALUE';

const emptyModelMessage = '"model" is not allowed to be empty';
const emptyColorMessage = '"color" is not allowed to be empty';
const emptyPlateMessage = '"licensePlate" is not allowed to be empty';

const invalidModelMessage = '"model" length must be at least 3 characters long';
const invalidColorMessage = '"model" length must be at least 3 characters long';
const invalidPlateMessage = '"model" length must be at least 3 characters long';

const createdCar = {
  id: 1,
  model: 'Chevrolet Monza',
  color: 'Branco',
  licensePlate: 'ABC1A2B',
};

module.exports = {
  createdCar,
  emptyModelMessage,
  emptyColorMessage,
  emptyPlateMessage,
  invalidModelMessage,
  invalidColorMessage,
  invalidPlateMessage,
  validModel,
  validColor,
  validPlate,
  typeError,
};