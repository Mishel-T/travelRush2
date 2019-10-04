import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
/*import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Redirect,
  Link
} from "react-router-dom";*/
import Logo from "../assets/images/teeny_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import classnames from "classnames";
import { loginUser } from "../../utils/API";
import SignUp from "../SignUp/signUp";
import { Link } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import history from "../../utils/history";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
//what is props doing here and where is it coming from????
function TransitionsModal(props) {
  console.log(props);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsvalid] = useState("");
  const [errors, setErrors] = useState({});
  const [userAuth, setUserauth] = useState({ success: false, token: "" });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("I am inside the `effect hook`...........");
    console.log("isValid state is " + isValid);
  }, [isValid]);

  useEffect(() => {
    console.log("I am inside the `effect hook`...........");
    console.log("errors state is..... ");
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    console.log("Set up local storage after successful log in`...........");
    localStorage.setItem("tokenKey", userAuth.token);
  }, [userAuth]);

  const handleOnChange = event => {
    const {
      target: { name, value }
    } = event;
    console.log("I am inside onchange event");
    console.log(name);
    console.log(value);
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("email input is " + email);
    console.log("password input is " + password);
    const credentials = { email: email, password: password };
    console.log(credentials);
    logUser(credentials);
  };

  const logUser = userInput => {
    console.log(userInput);
    //PROBLEM WITH REQUEST BEGINS HERE AND DOWNWARDS....   { email: "tprice@gmail.com", password: "guestpauTr58" }
    loginUser(userInput)
      .then(response => {
        console.log("Successfully logged into account");
        console.log(response);
        if (response.data.success) {
          //set token if login is successful.
          setUserauth(response.data);
          //clear errors on successfull log in
          setErrors({});
          history.push("/myaccount");
          //handleOnChange();
          handleClose();
        } else if (response.data.email === "User not found") {
          //update error and isValid state variables when user wasn't found in the database
          setErrors(response.data);
          setIsvalid(false);
        } else if (response.data.password === "Password is incorrect") {
          //update error and isValid state variables when user entered wrong password.
          setErrors(response.data);
          setIsvalid(false);
        }
      })
      .catch(err => {
        //console.log("Account not created because of error");
        console.log(err);
        console.log("this is an error", err.response);
        //Set the state for the errors
        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
        setIsvalid(err.response.data.isValid);
      });
  };

  return (
    // <Router>

    <div>
      <a className="waves-effect waves-teal btn-flat" onClick={handleOpen}>
        Login
      </a>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        //BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img src={Logo} className="responsive-img" alt="Logo" />
            <h2 id="transition-modal-title">User Login</h2>
            <p id="transition-modal-description">Please log in below.</p>
            <form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  onChange={handleOnChange}
                  className={classnames("form-control input_user", {
                    validate: errors.password
                  })}
                  id="emailInput"
                  placeholder="Username"
                />
                {errors.email && (
                  <span
                    className="helper-text red-text"
                    data-error={errors.email}
                  >
                    {errors.email}
                  </span>
                )}
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
                  onChange={handleOnChange}
                  className={classnames("form-control input_pass", {
                    validate: errors.password
                  })}
                  id="passwordInput"
                  placeholder="Password"
                />
                {errors.password && (
                  <span
                    className="helper-text red-text"
                    data-error={errors.password}
                  >
                    {errors.password}
                  </span>
                )}
              </div>
              <button
                /*onClick={props.onSubmit}*/ onClick={handleFormSubmit}
                type="button"
                name="button"
                id="loginButton"
                className="btn
                login_btn"
              >
                {" "}
                Login
              </button>
            </form>
            <div className="d-flex justify-content-center links">
              Don't have an account?{" "}
              <a href="/signup" className="ml-2">
                Sign Up!
              </a>
            </div>
            <div className="d-flex justify-content-center links">
              {/* <a href="#">Forgot your password?</a> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
    // </Router>
  );
}

export default TransitionsModal; /*onClick={handleFormSubmit}
                 type="button"
                  name="button"
                  id="loginButton"
                  className="btn
                login_btn"
                >
                  {" "}
                  Login
                </button>
              )} */
/*onClick={handleFormSubmit}
                    type="button"
                    name="button"
                    id="loginButton"
                    className="btn login_btn"
                  >
                    {" "}
                    Login
                  </button>
                </Link>
              ) : (
                <button
                  /*onClick={props.onSubmit}*/

/*
{userAuth.success ? (
                <Link to="/myaccount">
                  <button
                    /*onClick={props.onSubmit}*/
