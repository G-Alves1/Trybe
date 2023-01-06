/*******1*******/
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
};

/*******2*******/
type Sum = (x: number, y: number) => number;

/*******3*******/
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
};

/*******4*******/
type StatesOfMatter = "liquid" | "solid" | "gaseous";

/*******5*******/
type IdentifyingDocument = string | number;

/*******6*******/
type SO = "linux" | "mac os" | "windows";

/*******7*******/
type Vowels = "a" | "e" | "i" | "o" | "u";

/*******8*******/
class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log("Au Au");
  }
}

/*******9*******/
class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

/*******10*******/
class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;

  constructor(
    origin: string,
    destination: string,
    departureDate: Date,
    arrivalDate: Date,
    passengers: number
  ) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

/*******11*******/
interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

/*******12*******/
interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

/*******13*******/
interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}
