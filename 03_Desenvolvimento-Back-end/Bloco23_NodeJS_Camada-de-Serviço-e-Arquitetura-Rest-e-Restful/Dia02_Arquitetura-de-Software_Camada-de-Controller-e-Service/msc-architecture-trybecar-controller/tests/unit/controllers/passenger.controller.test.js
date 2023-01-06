const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { passengerService } = require('../../../src/services');
const passengerController = require('../../../src/controllers/passenger.controller');
const {
  happyControllerResponseCreateTravelObject,
  happyReqCreateTravelObject,
  happyResponseCreateTravelObject,
} = require('./mocks/passenger.controller.mock');

describe('Teste de unidade do passengerController', function () {
  it('Criando uma nova viagem', async function () {
    const res = {};
    const req = happyReqCreateTravelObject;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(passengerService, 'requestTravel')
      .resolves(happyControllerResponseCreateTravelObject);

    await passengerController.createTravel(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(happyResponseCreateTravelObject);
  });

  afterEach(sinon.restore);
});
