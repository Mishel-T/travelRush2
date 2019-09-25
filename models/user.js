//const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// };

// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
//===========This way of showing declaring a function was causing errors!!!===================
// userSchema.methods.generateHash(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
// };
// userSchema.methods.validPassword(password) {
// return bcrypt.compareSync(password, this.password)
// };
//=============================================================================================
const User = mongoose.model("User", userSchema);

module.exports = User;
