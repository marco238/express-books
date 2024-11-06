const mongoose = require('mongoose');

const GENRES = ["Thriller", "Horror", "Fantasy", "Magic"]

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A book needs a title'],
  },
  author: {
    type: String,
    required: [true, 'A book needs an author']
  },
  description: {
    type: String,
  },
  genres: {
    type: [String],
    required: [true, 'Genres are required'],
    enum: GENRES
  },
  pages: {
    type: Number,
    required: [true, 'Pages are required'],
    min: [1, 'At least 1 page'],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  publicationDate: {
    type: Date,
    default: Date.now()
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book