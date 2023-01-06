const fs = require('fs').promises;

const readContentFile = async (path) => {
  const content = await fs.readFile(path, 'utf-8');

  if (!content) return [];

  return JSON.parse(content);
};

const writeContentFile = async (path, content) => {
  await fs.writeFile(path, JSON.stringify(content));

  return content;
};

module.exports = { readContentFile, writeContentFile };
