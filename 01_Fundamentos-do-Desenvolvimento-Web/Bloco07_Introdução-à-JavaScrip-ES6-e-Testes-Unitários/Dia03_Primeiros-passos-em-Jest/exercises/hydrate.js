const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);
    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }
  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
};
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;