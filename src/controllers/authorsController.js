import authors from '../models/Author.js';

class authorController {

  static getAuthors = (req, res) => {
    authors.find((err, authors) => {
      if(!err){
        res.status(200).json(authors);
      } else {
        res.status(400).send({message: err.message});
      }
    });
  }

  static getAuthorById = (req, res) => {
    const { id } = req.params;

    authors.findById(id, (err, authors) => {
      if(err) {
        res.status(400).send({message: `${err.message} - author not found`});
      } else {
        res.status(201).send(authors.toJSON());
      }
    });
  }

  static createAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if(err) {
        res.status(500).send({message: err.message});
      } else {
        res.status(201).send(author.toJSON());
      }
    })
  }

  static updateAuthor = (req, res) => {
    const { id } = req.params;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "author has updated"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

  static deleteAuthor = (req, res) => {
    const { id } = req.params;

    authors.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: "author has removed"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

}

export default authorController;