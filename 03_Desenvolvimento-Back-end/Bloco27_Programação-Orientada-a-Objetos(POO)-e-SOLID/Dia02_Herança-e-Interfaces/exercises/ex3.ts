class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);