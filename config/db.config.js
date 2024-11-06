const mongoose = require('mongoose');

const DB_NAME = 'demo-mongoose-books';
const MONGO_DB_URI = 'mongodb://127.0.0.1:27017'

mongoose.connect(`${MONGO_DB_URI}/${DB_NAME}`)
  .then(() => {
    console.log(`Connected to DB: ${DB_NAME}`)
  })
  .catch(err => {
    console.error(err)
    process.exit(0);
  })

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});