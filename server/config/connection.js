const mongoose = require("mongoose");

// TODO: Add apollo server connection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/asksphere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
