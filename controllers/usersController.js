const db = require("../models");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(db))
      .catch(err => res.status(422).json(err));
  },

  findByEmail: function(req, res) {
    db.User.findByEmail(req.params.email)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //************Do validation in route before saving new user ******************/
  createUser: function(req, res) {
    db.User.save(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //   update: function(req, res) {
  // //     db.Airport.findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  deleteUser: function(req, res) {
    db.User.deleteOne({ _id: req.params.id })
      // .then(dbModel => dbModel.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};

//HOW TO CREATE A MODEL ONCE WITH insertMany()
