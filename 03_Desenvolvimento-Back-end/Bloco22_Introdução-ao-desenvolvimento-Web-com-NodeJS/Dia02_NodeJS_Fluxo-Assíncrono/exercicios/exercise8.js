function fizzBuzz (number) {
  return new Promise((resolve, reject) => {
    if(number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz')
      return resolve('FizzBuzz');
    };
    if(number % 3 === 0) {
      console.log('Fizz')
      return resolve('Fizz');
    };
    if(number % 5 === 0) {
      console.log('Buzz')
      return resolve('Buzz');
    };

    console.log(number);
    reject(number);
  });
};

fizzBuzz(15);