// Repare que aqui importamos também a função 'model' do Mongoose:
import { connect, Schema, model } from 'mongoose';

// connect('mongodb://localhost:27017/model_example');

interface Book {
  title: string,
  author: string,
}

// Aqui está o nosso schema construído logo acima:

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true }});

// Para acessarmos os métodos disponibilizados pelo Mongoose e
// implementarmos nossa API, criamos um Model do product:

const bookModel = model<Book>('books', bookSchema);