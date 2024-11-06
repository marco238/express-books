const mongoose = require('mongoose')
const Book = require('../models/Book.model');

require('../config/db.config');

const books = require('../data.json')

mongoose.connection.once('open', () => {
  // mongoose.connection.dropDatabase()
  Book.deleteMany()
    .then(() => {
      return Book.create(books)
    })
    .then(booksCreated => {
      console.log(booksCreated)

      return Book.findOneAndUpdate(
        { title: 'El nombre del viento' },
        { title: 'El temor de un hombre sabio' },
        { new: true }
      )
    })
    .then(book => {
      console.log(book)
      return Book.findOneAndDelete({ title: 'Harry Potter' })
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .then(() => {
      console.log("Connection closed");
      process.exit(1);
    })
    .catch(err => {
      console.error(err)
      process.exit()
    })
})

// mongoose.connection.once('open', async () => {
//   await mongoose.connection.dropDatabase()

//   try {
//     const booksCreated = await Book.create(books);
//     console.log(booksCreated)
//   } catch(err) {
//     console.error(err)
//   }
// })