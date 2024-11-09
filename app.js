const path = require('path')
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const Book = require('./models/Book.model');

require('./config/db.config');

const app = express()
app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');




app.get('/', (req, res, next) => {
  const { q: searchTerm } = req.query

  Book.find({ title: { $regex: new RegExp(searchTerm, "i") } })
    .then(books => {
      res.render('home', { books })
    })
    .catch(err => console.error(err))

})

app.get('/books/:id', (req, res, next) => {
  const { id } = req.params

  Book.findById(id)
    .then(book => {
      res.render('bookDetail', { book })
    })
    .catch(err => console.error(err))
})

app.get('/books/category/:category', (req, res, next) => {
  const { category } = req.params

  Book.find({ genres: { $in: category } })
    .then(books => {
      res.render('home', { books, category })
    })
    .catch(err => console.error(err))
})


app.listen(3000, () => {
  console.log('App running in port 3000')
})