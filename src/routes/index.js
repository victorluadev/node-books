import express from "express";

import booksRouter from "./booksRoutes.js";

const  routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ title: "Curso de Node" })
  })

  app.use(
    express.json(),
    booksRouter
  )
}

export default routes;