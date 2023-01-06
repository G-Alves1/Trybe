import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IPost, Post } from '../interfaces';

export async function getAll(): Promise<Post[]> {
  const query = 'SELECT * FROM Posts';

  const [posts] = await connection.execute(query);

  return posts as Post[];
}

export async function getById(id: number): Promise<Post | null> {
  const query = 'SELECT * FROM Posts WHERE id = ?';
  const values = [id];

  const [data] = await connection.execute(query, values);
  const [post] = data as Post[];

  return post || null;
}

export async function create(post: IPost): Promise<Post> {
  const { title, author, category, publicationDate } = post;

  const query = 'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)';
  const values = [title, author, category, publicationDate];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newPost: Post = { id, title, author, category, publicationDate };
  return newPost;
}

export async function update(id: number, post: IPost): Promise<Post> {
  const { title, author, category, publicationDate } = post;

  const query = `UPDATE Posts SET title = ?, author = ?,
   category = ?, publicationDate = ? WHERE id = ?`;
  const values = [title, author, category, publicationDate, id];

  await connection.execute(query, values);

  const editedPost: Post = { id, title, author, category, publicationDate };
  return editedPost;
}

export async function remove(id: number): Promise<Post | null> {
  const postToBeDeleted = await getById(id);
  if (!postToBeDeleted) return null;

  const query = 'DELETE FROM Posts WHERE id = ?';
  const values = [id];

  await connection.execute(query, values);

  return postToBeDeleted;
}

export async function getAllBySearchTerm(term: string): Promise<Post[]> {
  const query = `SELECT * FROM Posts WHERE title LIKE ? OR 
  author LIKE ? OR category LIKE ? OR publicationDate LIKE ?`;
  const values = [`%${term}%`, `%${term}%`, `%${term}%`, `%${term}%`];

  const [posts] = await connection.execute(query, values);

  return posts as Post[];
}
