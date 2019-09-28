// The state of the app is changed when the user clicks prompt
// User is redirected to sign-in page
// if login modal is scrapped, we will likely have another state change for the login page too
import React from "react";
import Logo from "../assets/images/teeny_logo.png";
import { Link } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import "./signUp.css";


function SignUp() {
  return (
    <div class="container">
      {/* <img
        src={Logo}
        className="responsive-img"
        alt="Logo"
        style={{ maxWidth: "200px" }}
      /> */}
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
            name
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
            name
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
            name
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
            name
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
          <label for="textarea1">Address</label>
          <textarea
            id="textarea1"
            class="materialize-textarea"
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
      </form>
      <button
        type="button"
        name="button"
        id="loginButton"
        className="btn submit_btn"
      >
        Submit
      </button>
      <div className="d-flex justify-content-center links" id="login">
        Already have an account?{" "}
        <Link to="/page">
        {/* <a href="/login" className="ml-2"> */}
          Login here!
        {/* </a> */}
        </Link>
      </div>
      <div className="d-flex justify-content-center links"></div>
    </div>
  );
}

export default SignUp;
