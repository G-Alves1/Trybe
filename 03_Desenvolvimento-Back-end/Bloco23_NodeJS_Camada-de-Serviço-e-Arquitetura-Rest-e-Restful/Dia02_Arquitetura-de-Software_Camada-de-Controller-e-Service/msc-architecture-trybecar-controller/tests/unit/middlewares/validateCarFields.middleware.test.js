const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateCarFields = require('../../../src/middlewares/validateCarFields.js');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateCarFields', function () {
  const validModel = 'Chevrolet Monza';
  const validColor = 'Branco';
  const validPlate = 'ABC1A2B';

  beforeEach(sinon.restore);

  describe('Tentando adicionar um carro sem o campo model', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"model" is required',
      });
    });
  });

  describe('Tentando adicionar um carro sem o campo color', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"color" is required',
      });
    });
  });

  describe('Tentando adicionar um carro sem o campo licensePlate', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"licensePlate" is required',
      });
    });
  });
});