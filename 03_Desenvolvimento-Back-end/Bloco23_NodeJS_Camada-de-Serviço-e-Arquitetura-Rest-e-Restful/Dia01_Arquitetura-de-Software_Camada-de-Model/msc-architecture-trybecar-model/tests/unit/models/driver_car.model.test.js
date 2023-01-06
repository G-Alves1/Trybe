const sinon = require('sinon');
const { expect } = require('chai');

const { driverCarModel } = require('../../../src/models');
const connection = require('../../../src/models/database/connection');

describe('Driver_Car Model', function () {
  describe('Cadastra o relacionamento das pessoas motoristas com os carros', function () {
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
        driverId: 3,
        carId: 1,
      };

      const response = await driverCarModel.insert(payload);

      expect(response).to.equal(expected);
    });
  });
});