import jwt from 'jsonwebtoken';
import { UserCredentials, IUser } from '../interfaces';
import * as userModel from '../models/userModel';
import { secret, config } from '../middlewares/jwtConfig';
import IToken from '../interfaces/IToken';

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export async function getAll() {
  const data = await userModel.getAll();
  return { status: 200, data };
}

export async function getById(id: number) {
  const data = await userModel.getById(id);

  if (data === null) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }
  return { status: 200, data };
}

export async function create(user: IUser) {
  const userExists = await userModel.getByEmail(user.email);
  if (userExists) {
    return { status: 400, error: { message: MESSAGES.USER_EXISTS } };
  }

  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token, ...payload };
  return { status: 201, data };
}

export async function update(id: number, user: IUser, token: string) {
  const { payload } = jwt.verify(token, secret) as IToken;
  if (payload.id !== id) {
    return { status: 403, error: { message: MESSAGES.FORBIDDEN } };
  }
  const userExists = await userModel.getById(id);
  if (!userExists) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }

  const data = await userModel.update(id, user);

  if (data === null) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }
  return { status: 200, data };
}

export async function remove(id: number, token: string) {
  const { payload } = jwt.verify(token, secret) as IToken;
  if (payload.id !== id) {
    return { status: 403, error: { message: MESSAGES.FORBIDDEN } };
  }
  const data = await userModel.remove(id);

  if (data === null) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }
  return { status: 200, data };
}

export async function login(userCredentials: UserCredentials) {
  const data = await userModel.getByEmail(userCredentials.email);

  if (data === null || data.password !== userCredentials.password) {
    return { status: 403, error: { message: MESSAGES.UNAUTHORIZED } };
  }
  return { status: 200, data: { token: 'fake token' } };
}
