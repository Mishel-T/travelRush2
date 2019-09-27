const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  console.log(data);

  //if email or password isn't entered, make these fields empty strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Add an appropriate error messages when a required field is missing.

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  //need to compare this password it to the database password???????

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
