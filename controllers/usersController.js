const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Defining methods for the booksController
module.exports = {
  testAll: function(req, res) {
    // if (err) {
    //   res.status(422).json(err);
    // }
    res.json({ msg: "The user controller works." });
  },
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findUser: function(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.json({
        success: false,
        message: "Email cannot be blank. Please enter an email"
      });
    }
    if (!password) {
      res.json({
        success: false,
        message: "Password cannot be blank. Please enter a password"
      });
    }
    db.User.findOne({ email })
      .then(dbUser => {
        if (!dbUser) {
          return res.status(404).json({ email: "User not found" });
        }
        //Check Password.
        bcrypt.compare(password, dbUser.password).then(isMatch => {
          if (isMatch) {
            //User Matched
            const payload = {
              id: dbUser._id,
              name: dbUser.name,
              email: dbUser.email
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: "1h" },
              (err, token) => {
                res.json({ success: true, token: "Bearer " + token });
              }
            );
            //res.json({ msg: "Success" });
          } else {
            return res.status(400).json({ msg: "Password is incorrect" });
          }
        });
      })
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
    const { name, email, password, address } = req.body;
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
    // if (!isValidEmail(email)) {
    //   res.json({
    //     success: false,
    //     message: "Email is not valid. Please enter a valid email"
    //   });
    console.log(req.body);

    //check whether email is in the database.
    db.User.findOne({ email: email })
      .then(dbUser => {
        if (dbUser) {
          //email already exist in the database, so send appropriate message.
          //res.json({ success: false, message: "Account already exist." });
          return res.status(400).json({ email: "Email already exists" });
        }

        //save the new user
        const newUser = new db.User({
          name: name,
          email: email,
          password: password,
          address: address
        });
        // console.log("TEST");

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.log(err);
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
        // newUser.name = name;
        // newUser.email = email;
        // newUser.password = password;
        // //newUser.password = newUser.generateHash(password);
        // newUser.address = address;

        // newUser.save((err, user) => {
        //   if (err) {
        //     res.json({ success: false, message: "Server error" });
        //   }
        //   res.json({ success: true, message: "Signed up!" });
        // });
      })
      .catch(err =>
        res.status(422).send("mongoose error: Error in findOne() block")
      );
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