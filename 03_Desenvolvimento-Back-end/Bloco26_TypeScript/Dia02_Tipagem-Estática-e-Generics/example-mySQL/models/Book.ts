import { Pool, RowDataPacket, ResultSetHeader } from "mysql2/promise";
import connection from "./connection";

export interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [rows] = await this.connection.execute<(Book & RowDataPacket)[]>(
      "SELECT * FROM books"
    );

    return rows;
  }
  /*
  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }
  */

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      "INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)",
      [title, price, author, isbn]
    );

    return { id: insertId, ...book };
  }
}
