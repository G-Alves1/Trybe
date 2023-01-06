const fs = require('fs');

const writeArchive = (nameFile, content) => {
  fs.writeFileSync(`./${nameFile}`, content);
  return 'ok';
};

module.exports = writeArchive;
