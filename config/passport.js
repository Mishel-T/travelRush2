const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
//const db = require("../models/user");
const User = mongoose.model("User");
const keys = require("./keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
//opts.issuer = "accounts.examplesoft.com";
//opts.audience = "yoursite.net";
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(dbUser => {
          if (dbUser) {
            console.log("The user exists!");
            console.log(dbUser);
            return done(null, dbUser);
          } else {
            return done(null, false);
            //maybe redirect to create account.
          }
        })
        .catch(err => {
          return done(err, false);
        });
      //console.log(jwt_payload);
    })
  );
};
