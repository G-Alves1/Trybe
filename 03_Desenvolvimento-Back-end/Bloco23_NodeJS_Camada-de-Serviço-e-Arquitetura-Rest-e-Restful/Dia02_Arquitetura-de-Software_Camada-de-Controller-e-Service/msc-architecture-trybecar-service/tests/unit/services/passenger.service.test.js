const { expect } = require('chai');
const sinon = require('sinon');
const { requestTravel } = require('../../../src/services/passenger.service');
const travelModel = require('../../../src/models/travel.model');
const waypointModel = require('../../../src/models/waypoint.model');
const passengerModel = require('../../../src/models/passenger.model');

const { travelResponse } = require('./mocks/passenger.service.mock');

describe('Verificando service pessoa passageira', function () {
  describe('solicitação de viagem', function () {
    it('sem pontos de parada é realizada com sucesso', async function () {
      // arrange
       sinon.stub(passengerModel, 'findById').resolves(true); // retorna verdadeiro sinalizando que o passageiro existe
       sinon.stub(travelModel, 'insert').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'findById').resolves(travelResponse);
      const WAITING_DRIVER = 1;
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
      };
      // act
      const travel = await requestTravel(
        passenger.id,
        passenger.startingAddress,
        passenger.endingAddress,
      );
      // assert
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: WAITING_DRIVER,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
    });

    it('com pontos de parada é realizada com sucesso', async function () {
      // arrange
      sinon.stub(passengerModel, 'findById').resolves(true); // retorna verdadeiro sinalizando que o passageiro existe
       sinon.stub(travelModel, 'insert').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'findById').resolves(travelResponse);
       sinon.stub(waypointModel, 'insert').resolves(1); // retorna waypoint com ID 1

      const WAITING_DRIVER = 1;
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
      };

      // act
      const travel = await requestTravel(
        passenger.id,
        passenger.startingAddress,
        passenger.endingAddress,
        passenger.waypoints,
      );

      // assert
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: WAITING_DRIVER,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
    });

    it('com mesmo local de origem e destino é rejeitada', async function () {
      // arrange
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua X',
      };

      // act
      const error = await requestTravel(
        passenger.id,
        passenger.startingAddress,
        passenger.endingAddress,
      );

      // assert
      expect(error.type).to.equal('INVALID_VALUE');
      expect(error.message).to.equal('"endingAddress" contains an invalid value');
    });
  });
   afterEach(function () {
     sinon.restore();
   });
 });
