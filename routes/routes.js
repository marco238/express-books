const router = require('express').Router();
const {
  getBooks,
  create,
  doCreate,
  getBook,
  getBooksByCategory,
  deleteBook
} = require('../controllers/books.controller');

function mySpecificMiddleware(req, res, next) {
  console.log('******* Hello from the specific middleware *******');
  next();
}

router.get('/', mySpecificMiddleware, getBooks);
router.get('/books/category/:category', getBooksByCategory);
router.get('/books/create', create);
router.post('/books/create', doCreate);
router.get('/books/:id', getBook);
router.post('/books/:id/delete', deleteBook);

// this would create a conflict with the routes, because the order of the routes is important
// and the route /books/create would be interpreted as /books/:id

// router.get('/books/:id', getBook);
// router.get('/books/create', create);

module.exports = router;
