import { Request, Response } from 'express';

import { IPost } from '../interfaces';
import * as postService from '../services/postService';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await postService.getAll();
  res.status(status).json(data);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await postService.getById(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const post = req.body as IPost;
  const { status, data } = await postService.create(post);
  res.status(status).json(data);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const post = req.body as IPost;

  const { status, data, error } = await postService.update(Number(id), post);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await postService.remove(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function getAllBySearchTerm(req: Request, res: Response) {
  const term = req.query.term as string;
  const { status, data, error } = await postService.getAllBySearchTerm(term);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
