const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateDriverNameField = require('../../../src/middlewares/validateDriverNameField');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateDriverNameField', function () {
  beforeEach(sinon.restore);

  describe('Tentando adicionar uma pessoa motorista sem nome', function () {
    it('é chamado o status com o código 400', async function () {
      const res = {};
      const req = {
        body: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateDriverNameField(req, res);

      expect(res.status).to.have.been.calledOnceWith(400);
    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateDriverNameField(req, res);

      expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    });

    it('não deve chamar o próximo middleware', async function () {
      const res = {};
      const req = {
        body: {},
      };
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateDriverNameField(req, res, next);

      // eslint-disable-next-line no-unused-expressions
      expect(next).to.have.not.been.called;
    });
  });
});