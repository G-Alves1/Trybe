const readline = require('readline-sync');
const fs = require('fs').promises;

const scripts = [
  { name: `File1`, script: './file1.txt' },
  { name: `File2`, script: './file2.txt' },
  { name: `File3`, script: './file3.txt' },
  { name: `File4`, script: './file4.txt' },
  { name: `File5`, script: './file5.txt' },
  { name: `FileAll\n`, script: './fileAll.txt' },
];

const readFileSelected = async () => {
  console.log(`Qual arquivo deseja utilizar?\n`)
  let message = scripts.map((script, index) => `${index + 1} - ${script.name}`);
  
  message = message.join('\n');
  
  const scriptNumber = readline.questionInt(message) - 1;
  
  const script = scripts[scriptNumber];
  

  if (!script) return console.log(`\nArquivo inexistente`);

  const fileSelected = script.script;
  
  const fileContent = await fs.readFile(fileSelected, 'utf-8')
    .catch((err) => {
      console.error(`Erro ao ler o arquivo: ${err}`);
    });
  console.log(`\nResultado: ${fileContent}`);

  const oldWord = readline.question(`\nQual palavra deseja mudar?\n`);
  const newWord = readline.question(`\nQual a nova palavra?\n`);

  const newContent = fileContent.replace(new RegExp(oldWord, 'g'), newWord);

  console.log(`\nResultado da modificação: ${newContent}`);

  const destination = readline.question(`\nOnde deseja salvar o resultado? (nome do arquivo)\n`);

  fs.writeFile(`./${destination}.txt`, newContent);
};
readFileSelected();
