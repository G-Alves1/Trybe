import Books from "./database/models/BookModel";

(async () => {
  const books = await Books.findAll({ raw: true });
  console.table(books);
  process.exit(0);
})();
