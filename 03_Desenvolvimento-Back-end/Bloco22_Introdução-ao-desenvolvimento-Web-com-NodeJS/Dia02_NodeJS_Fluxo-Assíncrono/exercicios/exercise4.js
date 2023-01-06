const fs = require('fs').promises;

const simpsonsFile = 'simpsons.json';

const simpsons = fs.readFile(simpsonsFile, 'utf-8')
  .then((content) => JSON.parse(content));

const readSimpsons = async () => {
  const family = await simpsons;
  family.map(({ id, name }) => console.log(`${id} - ${name}`));
};
readSimpsons();

const getSimpsonsId = async (id) => {
  const family = await simpsons;

  const findId = family.find((simpson) => parseInt(simpson.id) === id);
  
  if(!findId) throw new Error('id não encontrado');
  
  console.log(findId);

  return findId;
};
getSimpsonsId(5);

const deleteSimpsons = async () => {
  const family = await simpsons;
  
  const filterSimpsons = family.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  fs.writeFile(simpsonsFile, JSON.stringify(filterSimpsons));
};
deleteSimpsons();

const createSimpsonFamily = async () => {
  const family = await simpsons;
  
  const filterSimpsons = family.filter((simpson) => ['1', '2', '3', '4'].includes(simpson.id));

  fs.writeFile('./simpsonFamily.json', JSON.stringify(filterSimpsons));
};
createSimpsonFamily();

const simpsonsFamily = fs.readFile('./simpsonFamily.json', 'utf-8')
  .then((content) => JSON.parse(content));

const addNelson = async () => {
  const family = await simpsonsFamily;

  const addSimpson = family.concat({ id: "5", name: "Nelson Muntz" });

  fs.writeFile('./simpsonFamily.json', JSON.stringify(addSimpson));
}
addNelson();

const replaceNelson = async () => {
  const family = await simpsonsFamily;
  
  const filterSimpsons = family.filter((simpson) => simpson.name !== 'Nelson Muntz');

  const addSimpson = filterSimpsons.concat([{ id: "5", name: "Maggie Simpson" }]);

  fs.writeFile('./simpsonFamily.json', JSON.stringify(addSimpson));
}
replaceNelson();
