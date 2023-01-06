const sinon = require('sinon');
const { expect } = require('chai');

const { driverModel } = require('../../../src/models');
const connection = require('../../../src/models/database/connection');

describe('Driver Model', function () {
  describe('Lista todas as pessoas motoristas', function () {
    before(async function () {
      const execute = [{
          id: 1,
          name: 'Liana Cisneiros',
        },
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];
  
      sinon.stub(connection, 'execute').resolves();
    });

    after(async function () {
      connection.execute.restore();
    });

    it('com o tipo array', async function () {
      const response = await driverModel.findAll();
      expect(response).to.be.a('array');
    });

    it('com sucesso', async function () {
      const expected = [
        {
          id: 1,
          name: 'Liana Cisneiros',
        }, 
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      const response = await driverModel.findAll();

      expect(response).to.deep.equal(expected);
    });
  });

  describe('Encontra uma pessoa motorista pelo id', function () {
    before(async function () {
      const execute = [
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    after(async function () {
      connection.execute.restore();
    });

    const expected = {
      id: 2,
      name: 'Fábio Frazão',
    };

    const payload = 2;

    it('com sucesso', async function () {
      const response = await driverModel.findById(payload);

      expect(response).to.deep.equal(expected);
    });
  });

  describe('Cadastra uma pessoa motorista', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    after(async function () {
      connection.execute.restore();
    });

    it('com sucesso', async function () {
      const expected = 1;

      const payload = {
        name: 'Liana Cisneiros',
      };

      const response = await driverModel.insert(payload);

      expect(response).to.equal(expected);
    });
  });
});