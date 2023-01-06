const readline = require('readline-sync');

const calculateAvgSpeed = () => {
    const distance = readline.questionInt(`\nDistância percorrida em metros: `);
    const time = readline.questionInt(`Tempo gasto em segundos: `);

    const avgSpeed = (distance / time).toFixed(2);

    console.log(`\nVelocidade média: ${avgSpeed} m/s`);
};

calculateAvgSpeed();