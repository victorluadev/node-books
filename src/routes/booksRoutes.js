import express from "express";
import bookController from "../controllers/booksController.js";

const booksRouter = express.Router();

booksRouter.get('/books', bookController.getBooks);

export default booksRouter;