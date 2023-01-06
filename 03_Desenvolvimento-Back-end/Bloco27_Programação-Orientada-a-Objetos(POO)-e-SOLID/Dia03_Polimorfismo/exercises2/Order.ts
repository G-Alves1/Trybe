import OrderItem from './OrderItem';
import Person from './Person';

export default class Order {
  private _id: number;
  private _createdAt: Date;
  private _client: Person;
  private _items: OrderItem[] = [];
  private _discount = 0;

  constructor(client: Person, items: OrderItem[], private _paymentMethod: string, discount?: number) {
    this._id = Math.trunc(Date.now() * (Math.random() + 1));
    this._createdAt = new Date();
    this._client = client;
    this.items = items;
    this.paymentMethod = _paymentMethod;

    if (discount) this.discount = discount;
  }

  get id(): number {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get client(): Person {
    return this._client;
  }

  set client(value: Person) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    if (!['dinheiro', 'cartão', 'vale'].includes(value)) {
      throw new Error('A forma de pagamento não é válida.');
    }
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this.items
      .reduce((previousValue, item) => previousValue + item.price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}