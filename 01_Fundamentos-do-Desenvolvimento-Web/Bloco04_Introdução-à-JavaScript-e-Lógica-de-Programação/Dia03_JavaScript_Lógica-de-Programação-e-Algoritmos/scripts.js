//Exercícios 1

/*******1*******/
let result = 1;
let number = 10;

for (let i = number; i > 0; i -= 1) {
  result *= i;
}

console.log(result);

/*******2*******/
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

/*******3*******/
let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

/*******4*******/
let biggestPrimeNumber = 0;

for (let i = 2; i <= 50; i += 1) {
  let isPrime = true;

  for (let index = 2; index < i; index += 1) {
    if (i % index === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    biggestPrimeNumber = i;
  }
}

console.log(biggestPrimeNumber);

//Exercícios 2

/*******1*******/
const n = 5;
let line = "";
let asterisk = "*";

for (let cont = 1; cont <= n; cont += 1) {
  line = line + asterisk;
}

for (let cont = 1; cont <= n; cont += 1) {
  console.log(line);
}

/*******2*******/
const n = 5;
let line = "";
let asterisk = "*";

for (let cont = 1; cont <= n; cont += 1) {
  line = line + asterisk;
  console.log(line);
}

/*******3*******/
const n = 5;
let line = "";
let asterisk = "*";
let space = " ";
let position = n;

for (let cont = 1; cont <= n; cont += 1) {
  for (c = 1; c <= n; c += 1) {
    if (c < position) {
      line = line + space;
    } else {
      line = line + asterisk;
    }
  }
  console.log(line);
  line = "";
  position -= 1;
}

/*******4*******/
const n = 5;
let line = "";
let asterisk = "*";
let space = " ";
let position = n;
let mid = (n + 1) / 2;
let left = mid;
let right = mid;

for (let cont = 1; cont <= mid; cont += 1) {
  for (c = 1; c <= n; c += 1) {
    if (c >= left && c <= right) {
      line = line + asterisk;
    } else {
      line = line + space;
    }
  }
  console.log(line);
  line = "";
  left -= 1;
  right += 1;
}

/*******5*******/
const n = 7;
let asterisk = "*";
let space = " ";
let mid = (n + 1) / 2;
let left = mid;
let right = mid;

for (let cont = 1; cont <= mid; cont += 1) {
  let line = "";
  for (let c = 1; c <= n; c += 1) {
    if (c == left || c == right || cont == mid) {
      line += asterisk;
    } else {
      line += space;
    }
  }
  left -= 1;
  right += 1;
  console.log(line);
}

/*******6*******/
let number = 10;
let result = 0;

for (let cont = 1; cont <= number; cont += 1) {
  if (number % cont === 0) {
    result += 1;
  }
}
if (number / 1 == number) {
  result += 1;
}

if (result === 2) {
  console.log('Número primo');
} else {
  console.log('Número não é primo');
}
