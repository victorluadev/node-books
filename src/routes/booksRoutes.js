import express from "express";
import bookController from "../controllers/booksController.js";

const booksRouter = express.Router();

booksRouter.get('/books', bookController.getBooks);
booksRouter.get('/books/:id', bookController.getBookById);

booksRouter.post('/books', bookController.createBook);

booksRouter.put('/books/:id', bookController.updateBook);

booksRouter.delete('/books/:id', bookController.deleteBook);

export default booksRouter;