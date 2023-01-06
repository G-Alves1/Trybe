const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const testNumber = require('./testNumber');

const writeArchive = require('./writeArchive');

describe('Executa a função testNumber', () => {
  describe('Exercício 1', () => {
    describe('quando o número for maior que 0', () => {
      describe('a resposta', () => {
        it('é uma "string"', () => {
          const resposta = testNumber(1);

          expect(resposta).to.be.a('string');
        });

        it('é igual a "positivo"', () => {
          const resposta = testNumber(1);

          expect(resposta).to.be.equals('positivo');
        });
      });
    });

    describe('quando o número for menor que 0', () => {
      describe('a resposta', () => {
        it('é uma "string"', () => {
          const resposta = testNumber(-1);

          expect(resposta).to.be.a('string');
        });

        it('é igual a "negativo"', () => {
          const resposta = testNumber(-1);

          expect(resposta).to.be.equals('negativo');
        });
      });
    });

    describe('quando o número for igual a 0', () => {
      describe('a resposta', () => {
        it('é uma "string"', () => {
          const resposta = testNumber(0);

          expect(resposta).to.be.a('string');
        });

        it('é igual a "neutro"', () => {
          const resposta = testNumber(0);

          expect(resposta).to.be.equals('neutro');
        });
      });
    });
  });
  describe('Exercício 3', () => {
    describe('quando o parâmetro informado não seja do tipo Number', () => {
      describe('a resposta', () => {
        it('é uma "string"', () => {
          const resposta = testNumber('a');
    
          expect(resposta).to.be.a('string');
        });
    
        it('é igual a "o valor/parâmetro deve ser um número"', () => {
          const resposta = testNumber('a');
    
          expect(resposta).to.be.equals('o valor/parâmetro deve ser um número');
        });
      });
    });
  });
  describe('Exercício 4', () => {
    describe('Executa a função writeArchive', () => {
      before(() => {
        sinon.stub(fs, 'writeFileSync');
      });
    
      after(() => {
        fs.writeFileSync.restore();
      });
      
      describe('a resposta', () => {
        it('é uma "string"', () => {
          const resposta = writeArchive('arquivo.txt', 'test exercício 4');
    
          expect(resposta).to.be.a('string');
        });
    
        it('é igual a "ok"', () => {
          const resposta = writeArchive('arquivo.txt', 'test exercício 4');
    
          expect(resposta).to.be.equals('ok');
        });
      });
    });
  });

});