import { Request, Response } from 'express';

import { UserCredentials, IUser } from '../interfaces';
import * as userService from '../services/userService';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await userService.getAll();
  res.status(status).json(data);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await userService.getById(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data, error } = await userService.create(user);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function update(req: Request, res: Response) {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }
  const { id } = req.params;
  const user = req.body as IUser;

  const { status, data, error } = await userService.update(
    Number(id),
    user,
    token as string,
  );

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function remove(req: Request, res: Response) {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }
  const { id } = req.params;
  const { status, data, error } = await userService.remove(
    Number(id),
    token as string,
  );

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function login(req: Request, res: Response) {
  const userCredentials = req.body as UserCredentials;
  const { status, data, error } = await userService.login(userCredentials);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
