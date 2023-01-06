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
  console.log(`Qual arquivo deseja ler?\n`)
  let message = scripts.map((script, index) => `${index + 1} - ${script.name}`);
  
  message = message.join('\n');
  
  const scriptNumber = readline.questionInt(message) - 1;
  
  const script = scripts[scriptNumber];
  
  if (!script) return console.log(`\nArquivo inexistente`);
  
  try {
    const fileContent = await fs.readFile(script.script, 'utf-8');
    console.log(`\nResultado: ${fileContent}`);
  } catch(err) {
    console.log(`Erro ao ler o arquivo: ${err}`);
  }
}
readFileSelected();
