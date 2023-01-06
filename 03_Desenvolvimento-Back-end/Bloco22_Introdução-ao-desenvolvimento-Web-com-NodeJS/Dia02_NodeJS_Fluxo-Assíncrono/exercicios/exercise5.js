const fs = require('fs').promises;

const arrayStrings = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
 
  const createFile = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFile)

  const readFiles = await Promise.all([
    fs.readFile('file1.txt', 'utf-8'),
    fs.readFile('file2.txt', 'utf-8'),
    fs.readFile('file3.txt', 'utf-8'),
    fs.readFile('file4.txt', 'utf-8'),
    fs.readFile('file5.txt', 'utf-8'),
  ]);

  fs.writeFile('./fileAll.txt', readFiles.join(' '));
};
arrayStrings();
