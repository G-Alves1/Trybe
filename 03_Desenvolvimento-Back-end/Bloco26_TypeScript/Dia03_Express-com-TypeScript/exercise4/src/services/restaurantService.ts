import { IRestaurant } from '../interfaces';
import * as restaurantModel from '../models/restaurantModel';

const MESSAGES = {
  RESTAURANT_NOT_FOUND: 'Restaurant not found',
};

export async function getAll() {
  const data = await restaurantModel.getAll();
  return { status: 200, data };
}

export async function getById(id: number) {
  const data = await restaurantModel.getById(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.RESTAURANT_NOT_FOUND } };
  return { status: 200, data };
}

export async function create(restaurant: IRestaurant) {
  const data = await restaurantModel.create(restaurant);
  return { status: 201, data };
}

export async function update(id: number, restaurant: IRestaurant) {
  const data = await restaurantModel.update(id, restaurant);

  if (data === null) return { status: 404, error: { message: MESSAGES.RESTAURANT_NOT_FOUND } };
  return { status: 200, data };
}

export async function remove(id: number) {
  const data = await restaurantModel.remove(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.RESTAURANT_NOT_FOUND } };
  return { status: 200, data };
}

export async function getAllOpen() {
  const data = await restaurantModel.getAllOpen();

  if (!data.length) return { status: 404, error: { message: MESSAGES.RESTAURANT_NOT_FOUND } };
  return { status: 200, data };
}
