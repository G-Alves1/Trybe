import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IProduct, Product } from '../interfaces';

export async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Products';

  const [products] = await connection.execute(query);

  return products as Product[];
}

export async function getById(id: number): Promise<Product | null> {
  const query = 'SELECT * FROM Products WHERE id = ?';
  const values = [id];

  const [data] = await connection.execute(query, values);
  const [product] = data as Product[];

  return product || null;
}

export async function create(product: IProduct): Promise<Product> {
  const { name, brand, price, manufacturingDate, expirationDate } = product;

  const query = `INSERT INTO Products (name, brand, price, manufacturing_date, expiration_date)
    VALUES (?, ?, ?, ?, ?)`;
  const values = [name, brand, price, manufacturingDate, expirationDate];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };
  return newProduct;
}

export async function update(id: number, product: IProduct): Promise<Product> {
  const { name, brand, price, manufacturingDate, expirationDate } = product;

  const query = `UPDATE Products SET name = ?, brand = ?, price = ?,
    manufacturing_date = ?, expiration_date = ? WHERE id = ?`;
  const values = [name, brand, price, manufacturingDate, expirationDate, id];

  await connection.execute(query, values);

  const editedProduct: Product = { id, ...product };
  return editedProduct;
}

export async function remove(id: number): Promise<Product | null> {
  const productToBeDeleted = await getById(id);
  if (!productToBeDeleted) return null;

  const query = 'DELETE FROM Products WHERE id = ?';
  const values = [id];

  await connection.execute(query, values);

  return productToBeDeleted;
}

export async function getAllByPriceRange(start: number, end: number): Promise<Product[]> {
  const query = 'SELECT * FROM Products WHERE price >= ? AND price <= ?';
  const values = [start, end];

  const [products] = await connection.execute(query, values);

  return products as Product[];
}

export async function getAllNotExpired(): Promise<Product[]> {
  const currentTime = new Date().toISOString().slice(0, 10);

  const query = 'SELECT * FROM Products WHERE expiration_date >= ?';
  const values = [currentTime];

  const [products] = await connection.execute(query, values);

  return products as Product[];
}
