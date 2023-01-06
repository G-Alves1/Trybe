function encode(valueString) {
  let stringA;
  let stringE;
  let stringI;
  let stringO;
  let stringU;

  stringA = valueString.replace(/a/gi, 1);
  stringE = stringA.replace(/e/gi, 2);
  stringI = stringE.replace(/i/gi, 3);
  stringO = stringI.replace(/o/gi, 4);
  stringU = stringO.replace(/u/gi, 5);
  valueString = stringU;
  return valueString;
}

function decode(valueString2) {
  let string1;
  let string2;
  let string3;
  let string4;
  let string5;

  string1 = valueString2.replace(/1/gi, 'a');
  string2 = string1.replace(/2/gi, 'e');
  string3 = string2.replace(/3/gi, 'i');
  string4 = string3.replace(/4/gi, 'o');
  string5 = string4.replace(/5/gi, 'u');
  valueString2 = string5;
  return valueString2;
}

const functions = { encode, decode };
module.exports = functions;