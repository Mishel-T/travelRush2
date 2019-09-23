const db = require("../models");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findByEmail: function(req, res) {
    db.User.findByOne({ email: req.params.email })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findByName: function(req, res) {
    //Not sure if name would come from req.params*****************
    db.User.findByOne({ name: req.params.name })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //************Do validation in route before saving new user ******************/
  //Helper function is used to validate email.
  isValidEmail: function(email) {
    //validation code for email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },

  createUser: function(req, res) {
    const { name, email, address, password } = req.body;
    //send custom message if any of the input variables are missing
    if (!name) {
      res.json({
        success: false,
        message: "Name cannot be blank. Please enter name"
      });
    }
    if (!email) {
      res.json({
        success: false,
        message: "Email cannot be blank. Please enter an email"
      });
    }
    if (!address) {
      res.json({
        success: false,
        message: "Address cannot be blank. Please enter an address"
      });
    }
    if (!password) {
      res.json({
        success: false,
        message: "Password cannot be blank. Please enter a password"
      });
    }
    if (!isValidEmail(email)) {
      res.json({
        success: false,
        message: "Email is not valid. Please enter a valid email"
      });
    }
    //check whether email is in the database.
    db.User.find({ email: email })
      .then(dbUser => {
        if (dbUser.length > 0) {
          //email already exist in the database, so send appropriate message.
          res.json({ success: false, message: "Account already exist." });
        }

        //save the new user
        const newUser = new User();
        newUser.name = name;
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.address = address;
        newUser.isDelete = false;
        newUser.save((err, user) => {
          if (err) {
            res.json({ success: false, message: "Server error" });
          }
          res.json({ success: true, message: "Signed up!" });
        });
      })
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  deleteUser: function(req, res) {
    db.User.deleteOne({ _id: req.params.id })
      // .then(dbModel => dbModel.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};

//HOW TO CREATE A MODEL ONCE WITH insertMany()

// if (name && email && address && password && isValidEmail(email)) {
//   db.User.create(req.body)
//     .then(dbUser => res.json(dbUser))
//     .catch(err => res.status(422).json(err));
// }

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })
