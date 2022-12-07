import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    type: {type: String, required: true},
    author: {type: String, required:true},
    publisher: {type: String, required: true},
    pageNumbers: {type: Number}
  }
);

const books = mongoose.model("books", bookSchema);

export default books;