const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data);
  //if name isn't entered, make this field an empty string, otherwise this field
  //have anything in it.
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  //Log an error message if user name is less than 2 characters of above 30 characters.
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  //

  //Add an appropriate error messages when a required field is missing.
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email provided is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Pasword must be between 6 and 30 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Confirm password does not match password.";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
