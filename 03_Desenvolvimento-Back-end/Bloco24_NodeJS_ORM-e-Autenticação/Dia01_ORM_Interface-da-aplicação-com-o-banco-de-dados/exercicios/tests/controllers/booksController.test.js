const chai = require('chai');
const chaiHttp = require('chai-http');
const { stub } = require('sinon');
const { expect } = chai;

chai.use(chaiHttp);

const { Book } = require("../../models");

const app = require('../../index.js');

describe('Busca todos os livros', () => {
  describe('quando não existe nenhum livro cadastrado', () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app)
        .get('/book');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.be.empty;
    });
  });
});

describe('Busca um livro pelo ID', () => {
  describe('retorna um registro de livro', () => {
    const findByPkStub = stub(Book, 'findByPk');
    const testBook = {
      id: 1,
      title: "Lord of the Rings",
      author: "J. R. R. Tolkien",
      pageQuantity: 1178,
      createdAt: "2001-09-28 01:00:00",
      updatedAt: "2001-09-28 01:00:00",
    };
    let result;

    before(async () => {
      findByPkStub.resolves(testBook);

      result = await chai.request(app)
        .get('/book/1');
    });

    after(() => {
      findByPkStub.restore();
    });

    it('called Book.findByPk', async () => {
      expect(Book.findByPk.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um objeto contendo os dados do livro', async () => {
      expect(result.body).to.contain(testBook);
    });
  });
});

describe('Cria um novo livro', () => {
  describe('retorna o registro do livro criado', () => {
    const createStub = stub(Book, 'create');
    const testBook = {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      pageQuantity: 689,
    };
    let result;

    before(async () => {
      createStub.resolves({
        id: 2,
        ...testBook,
        updatedAt: "2022-01-28T15:45:28.398Z",
        createdAt: "2022-01-28T15:45:28.398Z"
      });

      result = await chai.request(app)
        .post('/book')
        .send(testBook);
    });

    after(() => {
      createStub.restore();
    });

    it('called Book.create', async () => {
      expect(Book.create.calledOnce).to.be.equals(true);
    });

    it('o status é 201', async () => {
      expect(result.status).to.be.equals(201);
    });

    it('a resposta é um objeto contendo os dados do livro', async () => {
      expect(result.body).to.contain(testBook);
    });
  });
});

describe('Atualiza um novo livro', () => {
  describe('retorna o registro do livro registrado', () => {
    const updateStub = stub(Book, 'update');
    const testBook = {
      id: 2,
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
      updatedAt: "2022-01-28T15:45:28.398Z",
      createdAt: "2022-01-28T15:45:28.398Z"
    };
    let result;

    before(async () => {
      updateStub.resolves(testBook);

      result = await chai.request(app)
        .post('/book/2')
        .send({
          title: testBook.title,
          author: testBook.author,
          pageQuantity: testBook.pageQuantity,
        });
    });

    after(() => {
      updateStub.restore();
    });

    it('called Book.update', async () => {
      expect(Book.update.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um objeto contendo os dados do livro', async () => {
      expect(result.body).to.contain(testBook);
    });
  });
});