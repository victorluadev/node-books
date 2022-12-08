import express from "express";
import authorController from "../controllers/authorsController.js";

const authorsRouter = express.Router();

authorsRouter.get('/authors', authorController.getAuthors);
authorsRouter.get('/authors/:id', authorController.getAuthorById);

authorsRouter.post('/authors', authorController.createAuthor);

authorsRouter.put('/authors/:id', authorController.updateAuthor);

authorsRouter.delete('/authors/:id', authorController.deleteAuthor);

export default authorsRouter;