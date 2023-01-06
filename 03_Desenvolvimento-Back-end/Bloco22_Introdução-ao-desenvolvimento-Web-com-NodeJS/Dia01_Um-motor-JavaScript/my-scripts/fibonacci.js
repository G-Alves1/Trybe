const readline = require('readline-sync');

function calculateFibo() {
    const value = readline.questionInt(`\nDigite o valor: `);

    if (value <= 0) {
        console.log(`Digite um número maior que 0!`)
        return;
    }

    let result = 1;
    let before = 0;
    let after = 1;

    for (let i = 1; i < value; i++) {
        console.log(result);
        result = before + after;
        before = after;
        after = result;
    }

    console.log(`\nResultado: ${result}`);
}

calculateFibo();