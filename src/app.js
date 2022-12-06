import express from 'express';

const app = express();
app.use(express.json());

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

function findBook(id) {
  return books.findIndex( book => book.id == id);
}

export default app;