import express from 'express';
import db from './config/database.js';

import books from './models/Book.js';

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {
  console.log('Connection has created');
})

const app = express();
app.use(express.json());

// const books = [
//   {id: 1, "title": "Senhor dos Aneis"},
//   {id: 2, "title": "O Hobbit"},
// ]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/books', (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books);
  })
});

app.get('/books/:id', (req, res) => {
  let index = findBook(req.params.id);

  res.json(books[index]);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Created');
});

app.put('/books/:id', (req, res) => {
  let index = findBook(req.params.id);
  books[index].title = req.body.title; 

  res.json(books);
});

app.delete('/books/:id', (req, res) => {
  let { id } = req.params;
  let index = findBook(id);
  books.splice(index, 1);
   
  res.send(`Book ${id} has deleted`);
});

function findBook(id) {
  return books.findIndex( book => book.id == id);
}

export default app;