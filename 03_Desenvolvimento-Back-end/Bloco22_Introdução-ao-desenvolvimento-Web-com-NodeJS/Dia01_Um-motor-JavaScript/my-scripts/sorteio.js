const readline = require('readline-sync');

const randNumber = () => parseInt(Math.random() * 10);

const resultGame = (gameNumber, userNumber) => {
    if (gameNumber === userNumber) console.log(`\nParabéns, número correto!`);
    else console.log(`\nOpa, não foi dessa vez. O número era ${gameNumber}`);
}

const game = () => {
    const gameNumber = randNumber();

    const userNumber = readline.questionInt(
        `\nDigite um número entre 0 e 10: `
    );

    resultGame(gameNumber, userNumber);

    const tryAgain = readline.question(
        `\nJogar novamente? (Digite Y para sim e N para não) `
    );

    if (tryAgain === 'Y') game();
    else if (tryAgain === 'N') console.log(`\nGame Over!`);
    else console.log(`\nComando Inválido, encerrando jogo!`)
}

game();
