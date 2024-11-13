const Book = require('../models/Book.model');

exports.getBooks = (req, res, next) => {
  const { q: searchTerm } = req.query

  Book.find({ title: { $regex: new RegExp(searchTerm, "i") } }) 
    .then(books => {
      res.render('home', { books })
    })
    .catch(err => console.error(err))
};

exports.getBooksByCategory = (req, res, next) => {
  const { category } = req.params

  Book.find({ genres: { $in: category } })
    .then(books => {
      res.render('home', { books, category })
    })
    .catch(err => console.error(err))
};

exports.create = (req, res, next) => {
  res.render('books/bookForm')
};

exports.doCreate = (req, res, next) => {
  Book.create(req.body)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => console.error(err))
};

exports.getBook = (req, res, next) => {
  const { id } = req.params // { id: 6731369d0656cb722c6147f6 }

  Book.findById(id)
    .then(book => {
      book.genres = book.genres.join(', ')
      res.render('books/bookDetail', { book })
    })
    .catch(err => console.error(err))
};

exports.deleteBook = (req, res, next) => {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => console.error(err))
};
