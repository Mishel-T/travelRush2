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
