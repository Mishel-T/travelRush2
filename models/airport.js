const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportSchema = new Schema({
  stateCode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

const Airport = mongoose.model("Airport", airportSchema);

module.exports = Airport;

/*
SERVER INFO TO ADD AIRPORT TO THE SUGGESTIONS ARRAY IN AUTOCOMPLETE VARIABLE. ****************************************
const express = require("express");
//const path = require("path");
//const fs = require("fs");
//const csv = require("fast-csv");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
let airportsObj;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/airportlist");

// fs.createReadStream("airportsUSA.csv")
//   .pipe(csv.parse({ headers: true }))
//   .on("data", row => {
//     console.log(row);
//   });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
**********************************************************************************/
