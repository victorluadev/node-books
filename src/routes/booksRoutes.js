import express from "express";
import bookController from "../controllers/booksController.js";

const booksRouter = express.Router();

booksRouter
  .get('/books', bookController.getBooks)
  .get('/books/search', bookController.getBookByPublisher)
  .get('/books/:id', bookController.getBookById)
  .post('/books', bookController.createBook)
  .put('/books/:id', bookController.updateBook)
  .delete('/books/:id', bookController.deleteBook)

export default booksRouter;