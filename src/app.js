import express from 'express';

const app = express();

const books = [
  {id: 1, "title": "Senhor dos Aneis"},
  {id: 2, "title": "O Hobbit"},
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

export default app;