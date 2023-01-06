const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { carController } = require('../../../src/controllers');
const { carService } = require('../../../src/services');
const {
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
} = require('./mocks/car-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Car - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastrando um novo carro com sucesso', function () {
    it('é chamado o status 201 e o json correto', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: null, message: createdCar });

      const res = {};
      const req = {
        body: {
          model: 'Ford',
          color: 'Preto',
          licensePlate: 'ABC1234',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
      expect(res.json).to.have.been.calledWith(createdCar);
    });
  });

  describe('Tentando cadastrar um novo carro com campos vazios', function () {
    it('Model vazio é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: '',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyModelMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: emptyModelMessage });
    });

    it('Color vazio é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: '',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyColorMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: emptyColorMessage });
    });

    it('Licença vazia é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: '',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyPlateMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: emptyPlateMessage });
    });
  });

  describe('Tentando cadastrar um novo carro com erros semânticos', function () {
    it('Model inválido é chamado com o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: 'Fa',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidModelMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: invalidModelMessage,
      });
    });

    it('Color inválido é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: 'a',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidColorMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: invalidColorMessage,
      });
    });

    it('Licença inválido é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: 'ya',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidPlateMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: invalidPlateMessage,
      });
    });
  });
});