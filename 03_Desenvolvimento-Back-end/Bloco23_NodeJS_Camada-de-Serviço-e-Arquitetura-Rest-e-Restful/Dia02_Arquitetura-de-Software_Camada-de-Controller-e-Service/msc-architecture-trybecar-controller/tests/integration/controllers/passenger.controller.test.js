const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

const app = require('../../../src/app');

const connection = require('../../../src/models/connection');

const {
  happyTravelDB,
  happyPassengerDB,
  happyTravelResponse,
} = require('./mocks/passenger.controller.mock');

describe('Teste de integração de passengers', function () {
  it('Criação de uma nova viagem com sucesso', async function () {
    sinon
      .stub(connection, 'execute')
      .onFirstCall()
      .resolves([[happyPassengerDB]])
      .onSecondCall()
      .resolves([{ insertId: 42 }])
      .onThirdCall()
      .resolves([[happyTravelDB]]);

    const response = await chai
      .request(app)
      .post('/passengers/1/request/travel')
      .send({
        startingAddress: 'Rua AAAA',
        endingAddress: 'Rua BBB',
      });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(happyTravelResponse);
  });
  afterEach(sinon.restore);
});
