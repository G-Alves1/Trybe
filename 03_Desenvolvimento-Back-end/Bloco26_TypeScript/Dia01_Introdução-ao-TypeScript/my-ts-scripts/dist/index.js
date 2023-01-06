"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const scripts = [
  { name: "Converter comprimento", script: "./length" },
  { name: "Converter massa", script: "./mass" },
  { name: "Converter capacidade", script: "./capacity" },
  { name: "Converter área", script: "./area" },
  { name: "Converter volume", script: "./volume" },
];
const scriptNames = scripts.map((item) => item.name);
const choice = readline_sync_1.default.keyInSelect(
  scriptNames,
  "Escolha um número para executar o script de conversão de unidade"
);
require(scripts[choice].script);
