const readline = require('readline-sync');

const scripts = [
    { name: `IMC`, script: './imc.js' },
    { name: `Velocidade`, script: './velocidade.js' },
    { name: `Sorteio`, script: './sorteio.js' },
    { name: `Fatorial`, script: './fatorial.js' },
    { name: `Fibonnaci\n`, script: './fibonacci.js' },
];

let message = scripts.map((script, index) => `${index + 1} - ${script.name}`);

message = message.join('\n');

const scriptNumber = readline.questionInt(message) - 1;

const script = scripts[scriptNumber];

if (!script) console.log('Número inválido. Saindo');

require(script.script);
