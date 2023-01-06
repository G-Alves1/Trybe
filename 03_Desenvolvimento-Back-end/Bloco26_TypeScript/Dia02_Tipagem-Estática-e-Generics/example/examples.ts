// Arrays
let names: string[] = ["Mary Joe", "Alan Joe"];

// Tuplas
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

// Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Type Unions
function imprimirCPF(cpf: number | string) {
  console.log("Seu CPF é: " + cpf);
}

imprimirCPF(11111111111);
imprimirCPF("111.111.111-11");

// Classes
class Person {
  name: string;
  birthDate: Date;
  age?: number;
  constructor(name: string, birthDate: Date, age?: number) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 31);

console.log(person1);
person1.speak();

console.log(person2);
person2.walk();

person1.age = 23;
console.log(person1);

// Interfaces
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

employee.firstName = 10; // Error: Type "number" is not assignable to type "string"

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  },
};

// Type Assertion
type Address = {
  street: string;
  number: number | null;
};

type User = {
  name: string;
  email: string;
  password: string;
};

function stringToJson(str: string): unknown {
  const result = JSON.parse(str);
  return result;
}

// utilizando o "as" para converter de unknown para User
const user = stringToJson(
  '{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}'
) as User;

// Outra sintaxe
const address = <Address>stringToJson('{"street":"Rua Tamarindo","number":1}');

user.name;
address.street;

// Generics
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");
