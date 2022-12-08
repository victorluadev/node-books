import books from '../models/Book.js';

class bookController {

  static getBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  }

  static getBookById = (req, res) => {
    const { id } = req.params;

    books.findById(id, (err, books) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Book not found`});
      } else {
        res.status(201).send(books.toJSON());
      }
    });
  }

  static createBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      
      if(err) {
        res.status(500).send({message: err.message});
      } else {
        res.status(201).send(book.toJSON());
      }
    })
  }

  static updateBook = (req, res) => {
    const { id } = req.params;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "Book has updated"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

}

export default bookController;