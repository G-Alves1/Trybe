import { Request, Response } from 'express';

import { IProduct } from '../interfaces';
import * as productService from '../services/productService';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await productService.getById(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const product = req.body as IProduct;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const product = req.body as IProduct;

  const { status, data, error } = await productService.update(Number(id), product);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await productService.remove(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function getAllByPriceRange(req: Request, res: Response) {
  const { start, end } = req.query;
  const { status, data, error } = await productService
    .getAllByPriceRange(Number(start), Number(end));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function getAllNotExpired(_req: Request, res: Response) {
  const { status, data } = await productService.getAllNotExpired();
  res.status(status).json(data);
}
