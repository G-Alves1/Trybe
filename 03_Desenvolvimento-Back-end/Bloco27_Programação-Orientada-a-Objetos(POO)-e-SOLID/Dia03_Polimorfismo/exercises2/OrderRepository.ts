import Order from './Order';
import Person from './Person';

export default class OrderRepository {
  private _orders: Order[] = [];

  addOrder(value: Order): void {
    this._orders.push(value);
  }

  removeOrder(value: Order): void {
    const index = this._orders.findIndex((order) => order.id === value.id);
    this._orders.splice(index, 1);
  }

  listByClient(value: Person): Order[] {
    return this._orders.filter((order) => order.client === value);
  }

  listBySortedValue(sort: string): Order[] {
    if (!['maior', 'menor'].includes(sort)) throw new Error('Valor de ordenação inválido.');

    if (sort === 'menor') {
      return this._orders.sort(
        (orderA, orderB) => {
          if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return 1;

          if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return -1;

          return 0;
        },
      );
    }

    return this._orders.sort(
      (orderA, orderB) => {
        if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return -1;

        if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return 1;

        return 0;
      },
    );
  }
}