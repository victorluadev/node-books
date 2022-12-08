import express from "express";

import booksRouter from "./booksRoutes.js";
import authorsRouter from "./authorsRoutes.js";

const  routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ title: "Curso de Node" })
  })

  app.use(
    express.json(),
    booksRouter,
    authorsRouter
  )
}

export default routes;