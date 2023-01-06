const readline = require('readline-sync');

const factorization = (x) => {
    if(x === 0 || x === 1) return 1;
    console.log(x);
    return x * factorization(x - 1);
};

const calculateFac = () => {
    const x = readline.questionInt(`\nInforme o valor de x: `);

    if (x < 0) return console.log(`Digite um número maior ou igual a 0!`);

    const result = factorization(x);

    console.log(`\nResultado: ${result}`);
};

calculateFac();
