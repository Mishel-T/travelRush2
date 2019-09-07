const express = require("express");

const mongoose = require("mongoose");
<<<<<<< HEAD
// const routes = require("./routes");
=======
//const routes = require("./routes");
>>>>>>> d41fcd87d50c3ead779e75e6d23ab35733bc235b
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
<<<<<<< HEAD
// app.use(routes);
=======
//app.use(routes);
>>>>>>> d41fcd87d50c3ead779e75e6d23ab35733bc235b

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});