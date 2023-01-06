import { Request, Response } from 'express';

import { IRestaurant } from '../interfaces';
import * as restaurantService from '../services/restaurantService';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await restaurantService.getAll();
  res.status(status).json(data);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await restaurantService.getById(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const restaurant = req.body as IRestaurant;
  const { status, data } = await restaurantService.create(restaurant);
  res.status(status).json(data);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const restaurant = req.body as IRestaurant;

  const { status, data, error } = await restaurantService.update(Number(id), restaurant);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await restaurantService.remove(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function getAllOpen(_req: Request, res: Response) {
  const { status, data, error } = await restaurantService.getAllOpen();

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
