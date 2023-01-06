const fetch = require('node-fetch');

const getSuperHero = () => {
  const result = fetch("https://www.superheroapi.com/api.php/4192484924171229/720")
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch(() => 'erro');
  return result;
};

getSuperHero();

module.exports = getSuperHero;