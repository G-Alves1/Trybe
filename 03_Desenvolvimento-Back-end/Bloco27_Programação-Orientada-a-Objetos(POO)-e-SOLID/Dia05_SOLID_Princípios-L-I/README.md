## Exercícios - exercises

**1.** O que deve ser modificado para que ele compreenda tanto o LSP (Liskov Substitution Principle, princípio de Substituição de Liskov) quanto ISP (Interface Segregation Principle, Princípio da Segregação de Interface)?
```sh
class Passenger {
  constructor(public nome:string, public cpf:number) { }
}

class ShippedItem {
  constructor(
    public nome:string, 
    public id:number, 
    public customerID:string,
  ) { }
}

class Flight {
  constructor(public num:number, public passengers:Passenger[]) { }

  Add(newPassenger:Passenger): void {
    this.passengers.push(newPassenger); 
  }

  Remove(removedPassenger: Passenger): void {
    const index = this.passengers.indexOf(removedPassenger, 0);
    if (index > -1) {
      this.passengers.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome:string, public flights:Flight[]) { }
  NewFlight(flightNum: number): void { }
  AddToFlight(flightNum: number, passenger: Passenger): void { }
  RemoveFromFlight(flightNum: number, passenger: Passenger): void { }
}

class TravelingCompany extends Company {
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }

  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

class ShippingCompany extends Company {
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  AddToFlight(flightNum:number, item:ShippedItem | Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }
}
```

## Exercícios 2 - exercises2

*Para os exercícios 1, 2 e 3.*
O programa retorna informações relacionadas ao cep de uma pessoa e tem duas funcionalidades:
* Consultar um endereço a partir de um cep e um número de um logradouro
* Consultar um cep a partir de um endereço e um número de um logradouro
**FooCepAPI.ts**
```sh
class FooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;
```
**CepService.ts**
```sh
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor() {
    this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
```
**index.ts**
```sh
import CepService from './CepService';

async function main() {
  const cepSvc = new CepService();

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
```
```sh
npx ts-node index.ts
```

**1.** Aplique a técnica de injeção de dependência para que a classe CepService diminua seu nível de acoplamento com a dependência FooCepAPI.

**2.** A classe CepService ainda depende de uma implemenção concreta para as chamadas da Api e CEP. Aplique o princípio da Inversão de dependência para fazer com que a classe CepService fique completamente desacoplada.

**3.** Implemente uma classe MockCepApi usada para realização de testes unitários. Obs: Você não precisa realizar os testes.

*Para os exercícios 4, 5 e 6*
**interfaces.ts**
```sh
export interface IVehicle {
  drive(): void;
  fly(): void;
}
```
**FuturisticCar.ts**
```sh
import { IVehicle } from './interfaces';

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
```
O objetivo do programa é modelar o comportamento de veículos. Inicialmente, supõe-se que há apenas um tipo de veículo que voa(fly) e move(drive) definido por IVehicle e implementado em FuturisticCar.

**4.** Implemente um novo tipo de veículo com a classe Car a partir da interface existente. Esse veículo deve somente ser capaz se mover.

**5.** Implemente um novo tipo de veículo com a classe AirPlane a partir da interface existente. Esse veículo deve somente ser capaz de voar.

**6.** Aplique o Princípio da Segregação de Interfaces com o objetivo de separar a implementação de cada tipo de veículo.