// The state of the app is changed when the user clicks prompt
// User is redirected to sign-in page
// if login modal is scrapped, we will likely have another state change for the login page too
import React, { Component } from "react";
import Logo from "../assets/images/teeny_logo.png";
// import { BrowserRouter } from "react-router-dom";
import "./signUp.css";
import { registerUser } from "../../utils/API";

//Make this a stateful component because it is a form?
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    address: ""
  };

  componentDidMount() {}

  //handles address input by extracting and updating its coordinates
  // handleOnBlur = event => {
  //   const {
  //     target: { name, value }
  //   } = event;
  //   console.log("I am inside blur event");
  //   console.log(name);
  //   console.log(value);
  //   this.setState({ [name]: value }, () => {
  //     console.log(event.target.value);
  //   });
  // };

  handleOnChange = event => {
    const {
      target: { name, value }
    } = event;
    console.log("I am inside onchange event");
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.addUser(this.state);
  };

  // handleOnChange = event => {
  //   console.log("I am inside change event");
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  // };

  // //Handles the date input
  // handleDateChange = event => {
  //   //console.log("I am inside the date event");
  //   const {
  //     target: { name, value }
  //   } = event;
  //   this.setState({ [name]: value }, () => {
  //     console.log(event.target.value);
  //   });
  // };

  //Helper function to get the coordinates for an address or airport.
  //Helper function to register new user
  addUser = userInput => {
    registerUser(userInput)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <img
          src={Logo}
          className="responsive-img"
          alt="Logo"
          style={{ maxWidth: "200px" }}
        />
        <h2 id="transition-modal-title">Create User Account</h2>
        <p id="transition-modal-description">
          Please create account credentials below.
        </p>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-user" />
              </span>
            </div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              onChange={this.handleOnChange}
              className="form-control input_user"
              id="nameInput"
              placeholder="Name"
            />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              onChange={this.handleOnChange}
              className="form-control input_pass"
              id="emailInput"
              placeholder="Email address"
            />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              type="password"
              name="password"
              onChange={this.handleOnChange}
              className="form-control input_pass"
              id="passwordInput"
              placeholder="Password"
            />
          </div>

          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              type="password"
              name="password2"
              onChange={this.handleOnChange}
              className="form-control input_pass"
              id="passwordInput"
              placeholder="Confirm password"
            />
          </div>

          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <label htmlFor="textarea1">Address</label>
            <textarea
              id="textarea1"
              name="address"
              onChange={this.handleOnChange}
              className="materialize-textarea"
              placeholder="Enter your address"
            ></textarea>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <label className="container">Remember me </label>
              <input
                type="checkbox"
                className="custom-control-input"
                id="customControlInline"
              />
              <span className="checkmark" />
            </div>
          </div>
          <button
            type="button"
            name="button"
            id="loginButton"
            className="btn submit_btn"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>

        <div className="d-flex justify-content-center links">
          Already have an account?{" "}
          <a href="/login" className="ml-2">
            Login here!
          </a>
        </div>
        <div className="d-flex justify-content-center links"></div>
      </div>
    );
  }
}

export default Signup;
