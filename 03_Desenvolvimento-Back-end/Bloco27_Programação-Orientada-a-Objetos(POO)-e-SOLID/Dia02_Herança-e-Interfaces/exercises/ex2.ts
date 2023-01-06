class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: Subclass) => {
  object.sayHello2();
};

// const sup = new Superclass();
const sub = new Subclass();

// myFunc(sup);
myFunc(sub);
