"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convert(value, fromUnit, toUnit) {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(1000, exponent);
}
function exec() {
  const value = readline_sync_1.default.questionFloat(
    "Digite o valor a ser convertido: \n"
  );
  const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(
    units,
    "Escolha um número para a unidade base:"
  );
  const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(
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
