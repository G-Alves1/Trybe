const path = require('path');
const fs = require('fs').promises;

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

const getAll = async () => fs.readFile(DATA_PATH, 'utf-8').then(JSON.parse);

const writeAll = async (content) =>
  fs.writeFile(DATA_PATH, JSON.stringify(content));

const findOne = (username) =>
  getAll().then((users) => users.find((user) => user.username === username));

const create = (username, password, admin) =>
  getAll()
    .then((users) => {
      users.push({ username, password, admin });
      return users;
    })
    .then(writeAll);

module.exports = {
  getAll,
  findOne,
  create,
};