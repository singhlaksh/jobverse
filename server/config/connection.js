const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@nikunj.8divwgt.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
