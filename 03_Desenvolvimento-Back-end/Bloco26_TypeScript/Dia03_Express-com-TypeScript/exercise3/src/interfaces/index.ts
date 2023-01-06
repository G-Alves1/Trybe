export interface IProduct {
  name: string;
  brand: string;
  price: number;
  manufacturingDate: string;
  expirationDate: string;
}

export interface Product extends IProduct {
  id: number;
}
