const func = (a, b, c) => {
  return new Promise((resolve, reject) => {
    const result = (a + b) * c;

    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject('Informe apenas números');
    };

    if(result < 50) return reject('Valor muito baixo');

    return resolve(result);
  });
};

const randNumber = Math.floor(Math.random() * 100 + 1);

const callFunc = async () => {
  try {
    const result = await func(randNumber, randNumber, randNumber);
    console.log(result);
  } catch(err) {
    console.log(err)
  };
};

callFunc();
