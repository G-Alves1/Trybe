const readline = require('readline-sync');

const calculateImc = () => {
    const width = readline.questionFloat(`\nQual o seu peso em kg? `);
    const height = readline.questionInt(`Qual a sua altura em cm? `);

    const imc = (width / Math.pow(height / 100, 2)).toFixed(2);

    console.log(`\nIMC: ${imc}\n`);

    if (imc < 18.5) console.log(`Situação: Abaixo do peso (magreza)`);
    else if (imc >= 18.5 && imc < 25) console.log(`Situação: Peso normal`);
    else if (imc >= 25 && imc < 30) console.log(`Situação: Acima do peso (sobrepeso)`);
    else if (imc >= 30 && imc < 35) console.log(`Situação: Obesidade grau I`);
    else if (imc >= 35 && imc < 40) console.log(`Situação: Obesidade grau II`);
    else console.log(`Situação: Obesidade graus III e IV`);
};

calculateImc();
