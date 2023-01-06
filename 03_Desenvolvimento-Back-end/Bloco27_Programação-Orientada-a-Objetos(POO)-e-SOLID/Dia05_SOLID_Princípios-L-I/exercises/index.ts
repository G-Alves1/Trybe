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
  constructor(public num:number, public payload:(Passenger | ShippedItem)[]) { }

  Add(newPayload:Passenger | ShippedItem): void {
    this.payload.push(newPayload); 
  }

  Remove(removedPayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removedPayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}

class Company {
  constructor(public nome:string, public flights:Flight[]) { }
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }

  AddToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
  RemoveToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
}

class TravelingCompany extends Company {
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
  AddToFlight(flightNum:number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }

  RemoveToFlight(flightNum:number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(item);
    }
  }
}