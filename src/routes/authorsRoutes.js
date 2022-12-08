import express from "express";
import authorController from "../controllers/authorsController.js";

const authorsRouter = express.Router();

authorsRouter
  .get('/authors', authorController.getAuthors)
  .get('/authors/:id', authorController.getAuthorById)
  .post('/authors', authorController.createAuthor)
  .put('/authors/:id', authorController.updateAuthor)
  .delete('/authors/:id', authorController.deleteAuthor);

export default authorsRouter;