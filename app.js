const path = require('path')
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const router = require('./routes/routes');

require('./config/db.config');

const app = express()
app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

function logGreetings(req, res, next) {
  console.log('******* Hello from the common middleware *******');
  next();
}

app.use(logGreetings);

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  console.log('App running in port 3000')
})
