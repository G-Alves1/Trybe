const { expect } = require('chai');
const sinon = require('sinon');
const travelModel = require('../../../src/models/travel.model');
const driveDB = require('../../../src/models/driver.model');
const driver = require('../../../src/services/driver.service');
const {
  correctReturnTravel,
  correctReturnDriver,
  busyDriver,
} = require('./mocks/driver.service.mock');

const DRIVER_ON_THE_WAY = 2;

describe('Verificando service Driver', function () {
  /* Validar se os IDs recebidos são existentes */
  describe('Atribuições de viagem com erros de id inexistente', function () {
    it('estão falhando ao tentar atribuir uma viagem com viajante inexistente', async function () {
      sinon.stub(travelModel, 'findById').resolves(undefined);

      const body = { travelId: 99999, driverId: 1 };
      const error = await driver.travelAssign(body);
    
      expect(error.type).to.equal('TRAVEL_NOT_FOUND');
      expect(error.message).to.equal('travel id not found');
    });

    it('estão falhando ao tentar atribuir uma viagem com motorista inexistente', async function () {
      sinon.stub(travelModel, 'findById').resolves(correctReturnTravel);
      sinon.stub(driveDB, 'findById').resolves(undefined);

      const body = { travelId: 1, driverId: 99999 };
      const error = await driver.travelAssign(body);
    
      expect(error.type).to.equal('DRIVER_NOT_FOUND');
      expect(error.message).to.equal('driver id not found');
    });
  });

  /* Validar se o motorista que esta tentando pegar uma viagem, não esta em outra viajem */
  describe('Atribuições de viagem com motorista ocupado', function () {
    it('esta falhando ao tentar iniciar uma viagem com motorista ocupado', async function () {
      sinon.stub(travelModel, 'findById')
        .onFirstCall()
          .resolves(correctReturnTravel)
        .onSecondCall()
          .resolves(busyDriver);
      sinon.stub(driveDB, 'findById').resolves(correctReturnDriver);
      
      const body = { travelId: 1, driverId: 1 };
      const error = await driver.travelAssign(body);

      expect(error.type).to.equal('TRAVEL_CONFLICT');
      expect(error.message).to.equal('travel already assigned');
      sinon.restore();
    });
  });

  /* Validar se podemos atribuir uma viagem com sucesso */
  describe('Atribuições de viagem com sucesso', function () {
    it('estão atribuindo com sucesso', async function () {
      sinon.stub(travelModel, 'updateById').resolves(true);
      sinon.stub(travelModel, 'findById').resolves(correctReturnTravel);
      sinon.stub(driveDB, 'findById').resolves(correctReturnDriver);

      const body = { travelId: 1, driverId: 1 };
      const travel = await driver.travelAssign(body);
  
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: DRIVER_ON_THE_WAY,
        startingAddress: 'Start',
        endingAddress: 'End',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
      sinon.restore();
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});