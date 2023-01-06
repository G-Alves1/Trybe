import Client from './Client';
import OrderItem from './OrderItem';

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client, 
    items: OrderItem[], 
    paymentMethod: string, 
    discount: number,
  ) {
    this._client = client;
    this.items = items;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
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
      .reduce((previousValue, item) => {
        const total = previousValue + item.price;

        return total;
      }, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
