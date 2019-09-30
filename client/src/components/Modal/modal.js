import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../assets/images/teeny_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import classnames from "classnames";
import { loginUser } from "../../utils/API";
import SignUp from "../SignUp/signUp";
import { Link } from "react-router-dom";

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
export default function TransitionsModal(props) {
  console.log(props);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsvalid] = useState({});
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = event => {
    const {
      target: { name, value }
    } = event;
    console.log("I am inside onchange event");
    console.log(name);
    console.log(value);
    if (name === "name") {
      setName(value);
    }
    else {
      setPassword(value);
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    logUser({name: name, password: password});
  };

  logUser = userInput => {
    loginUser(userInput)
      .then(response => {
        console.log("Successfully logged into account");
        console.log(response);
        if (response.data.success) {
          //set token if login is successful.
          setToken(response.data.token, () => {
            console.log(response.data);
          });
        }
      })
      .catch(err => {
        //console.log("Account not created because of error");
        console.log(err);
        console.log("this is an error", err.response.data);
        //Set the state for the errors
        setErrors({ errors: err.response.data }, () => {
          console.log(errors);
        });
      });
  };



  const handleOnChange 
  return (
    // <Router>
    <div>
      <button type="button" onClick={handleOpen}>
        Login
      </button>
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
                  onChange={handleOnChange}
                  className={classnames("form-control input_user", {
                    validate: errors.password
                  })}
                  id="emailInput"
                  placeholder="Username"
                />
                {errors.password && !isValid.Success && (
              <span
                className="helper-text red-text"
                data-error={errors.password}
              >
                {errors.password}
              </span>
            )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  className={classnames("form-control input_user", {
                    validate: errors.password
                  })}
                  id="passwordInput"
                  placeholder="Password"
                />
                {errors.password && !isValid.Success && (
              <span
                className="helper-text red-text"
                data-error={errors.password}
              >
                {errors.password}
              </span>
            )}
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key" />
                  </span>
                </div>
              </div>
              <button
                onClick={props.onSubmit}
                type="button"
                name="button"
                id="loginButton"
                className="btn login_btn"
              >
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
