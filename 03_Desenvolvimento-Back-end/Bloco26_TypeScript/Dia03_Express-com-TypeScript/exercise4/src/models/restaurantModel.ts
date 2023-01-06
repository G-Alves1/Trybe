import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IRestaurant, Restaurant } from '../interfaces';

export async function getAll(): Promise<Restaurant[]> {
  const query = 'SELECT * FROM Restaurants';

  const [data] = await connection.execute(query);

  return data as Restaurant[];
}

export async function getById(id: number): Promise<Restaurant | null> {
  const query = 'SELECT * FROM Restaurants WHERE id = ?';
  const values = [id];

  const [data] = await connection.execute(query, values);
  const [restaurant] = data as Restaurant[];

  return restaurant || null;
}

export async function create(restaurant: IRestaurant): Promise<Restaurant> {
  const { name, category, openingTime, closingTime } = restaurant;

  const query = `INSERT INTO Restaurants (name, category, openingTime, closingTime)
    VALUES (?, ?, ?, ?)`;
  const values = [name, category, openingTime, closingTime];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newRestaurant: Restaurant = { id, ...restaurant };
  return newRestaurant;
}

export async function update(id: number, restaurant: IRestaurant): Promise<Restaurant> {
  const { name, category, openingTime, closingTime } = restaurant;

  const query = `UPDATE Restaurants SET name = ?, category = ?,
    openingTime = ?, closingTime = ? WHERE id = ?`;
  const values = [name, category, openingTime, closingTime, id];

  await connection.execute(query, values);

  const editedRestaurant: Restaurant = { id, ...restaurant };
  return editedRestaurant;
}

export async function remove(id: number): Promise<Restaurant | null> {
  const restaurantToBeDeleted = await getById(id);
  if (!restaurantToBeDeleted) return null;

  const query = 'DELETE FROM Restaurants WHERE id = ?';
  const values = [id];

  await connection.execute(query, values);

  return restaurantToBeDeleted;
}

export async function getAllOpen(): Promise<Restaurant[]> {
  const query = `SELECT * FROM Restaurants WHERE openingTime <= time(NOW())
    AND closingTime >= time(NOW())`;

  const [data] = await connection.execute(query);

  return data as Restaurant[];
}
