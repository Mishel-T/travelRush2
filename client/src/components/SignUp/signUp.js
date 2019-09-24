// The state of the app is changed when the user clicks prompt
// User is redirected to sign-in page
// if login modal is scrapped, we will likely have another state change for the login page too
import React from "react";
import Logo from "../assets/images/teeny_logo.png";
import "./signUp.css";


function SignUp() {
  return (
    <div>
      <img src={Logo} className="responsive-img" alt="Logo" style={{ maxWidth: '200px' }} />
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
          <label htmlFor="name">Username: </label>
          <input
            type="text"
            name
            className="form-control input_user"
            id="emailInput"
            placeholder="Username"
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
          <textarea id="textarea1" class="materialize-textarea" placeholder="Enter your address"></textarea>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlInline"
            />
            <label
              className="custom-control-label"
              htmlFor="customControlInline"
            >
              Remember me
            </label>
          </div>
        </div>
      </form>
      <button
        type="button"
        name="button"
        id="loginButton"
        className="btn login_btn"
      >
        Login
      </button>
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

export default SignUp;
