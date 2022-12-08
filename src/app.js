import express from 'express';
import db from './config/database.js';

// models
import books from './models/Book.js';

// routes
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {
  console.log('Connection has created');
})

const app = express();
app.use(express.json());

routes(app);

// app.get('/books/:id', (req, res) => {
//   let index = findBook(req.params.id);

//   res.json(books[index]);
// });

// app.put('/books/:id', (req, res) => {
//   let index = findBook(req.params.id);
//   books[index].title = req.body.title; 

//   res.json(books);
// });

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