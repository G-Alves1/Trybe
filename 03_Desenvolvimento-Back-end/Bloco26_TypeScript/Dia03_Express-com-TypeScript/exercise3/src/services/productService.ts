import { IProduct } from '../interfaces';
import * as productModel from '../models/productModel';

const MESSAGES = {
  PRODUCT_NOT_FOUND: 'Product not found',
};

export async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data };
}

export async function getById(id: number) {
  const data = await productModel.getById(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
  return { status: 200, data };
}

export async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export async function update(id: number, product: IProduct) {
  const data = await productModel.update(id, product);

  if (data === null) return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
  return { status: 200, data };
}

export async function remove(id: number) {
  const data = await productModel.remove(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
  return { status: 200, data };
}

export async function getAllByPriceRange(start: number, end: number) {
  if (Number.isNaN(start) || Number.isNaN(end)) {
    return { status: 401, error: { message: '"start" and "end" params must be numbers' } };
  }
  if (start > end) {
    return { status: 401, error: { message: '"end" param must be greater than "start"' } };
  }

  const data = await productModel.getAllByPriceRange(start, end);

  return { status: 200, data };
}

export async function getAllNotExpired() {
  const data = await productModel.getAllNotExpired();
  return { status: 200, data };
}
