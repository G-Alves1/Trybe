import readline from "readline-sync";

const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  const fromUnitChoiceIndex = readline.keyInSelect(
    units,
    "Escolha um número para a unidade base:"
  );

  const toUnitChoiceIndex = readline.keyInSelect(
    units,
    "Escolha um número para a conversão:"
  );

  const fromUnitChoice = units[fromUnitChoiceIndex];
  const toUnitChoice = units[toUnitChoiceIndex];

  const result = convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();
