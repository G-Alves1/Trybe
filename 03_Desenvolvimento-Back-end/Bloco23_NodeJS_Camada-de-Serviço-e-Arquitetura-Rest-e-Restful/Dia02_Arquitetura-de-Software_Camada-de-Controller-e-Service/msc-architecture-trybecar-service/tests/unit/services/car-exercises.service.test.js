const { expect } = require('chai');
const sinon = require('sinon');

const carModel = require('../../../src/models/car.model');
const { carService } = require('../../../src/services');
const { createdCar } = require('./mocks/car-exercises.service.mock');

const validModel = 'Chevrolet Monza';
const validColor = 'Branco';
const validPlate = 'ABC1A2B';
const invalidValue = '9';

describe('Verificando service Car', function () {
  describe('Tentando cadastrar um novo carro com erros semânticos', function () {
    it('retorna um erro ao receber um modelo inválido', async function () {
      const response = await carService.createCar(invalidValue, validColor, validPlate);

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"model" length must be at least 3 characters long',
      );
    });

    it('retorna um erro ao receber uma cor inválida', async function () {
      const response = await carService.createCar(validModel, invalidValue, validPlate);

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"color" length must be at least 2 characters long',
      );
    });

    it('retorna um erro ao receber uma placa inválida', async function () {
      const response = await carService.createCar(validModel, validColor, invalidValue);

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"licensePlate" length must be 7 characters long',
      );
    });
  });

  describe('Cadastrando um novo carro com sucesso', function () {
    afterEach(function () {
      sinon.restore();
    });

    beforeEach(function () {
      sinon.stub(carModel, 'insert').resolves(createdCar);
    });

    it('não retorna erros', async function () {
      const response = await carService.createCar(validModel, validColor, validPlate);

      expect(response.type).to.equal(null);
    });

    it('retorna o carro cadastrado', async function () {
      const response = await carService.createCar(validModel, validColor, validPlate);

      expect(response.message).to.equal(createdCar);
    });
  });
});