const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  hotel: [],
  restaurant: [],
  coffee: [],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
