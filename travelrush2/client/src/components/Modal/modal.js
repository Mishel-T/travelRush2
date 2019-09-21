import React from "react";
import Logo from "./teeny_logo.png"
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          <img src={ Logo } className="responsive-img" alt="Logo" />
            <h2 id="transition-modal-title">User Login</h2>
            <p id="transition-modal-description">
              Please log in below.
            </p>
            <form>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text" name className="form-control input_user" id="emailInput" placeholder="Username" />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input type="password" name className="form-control input_pass" id="passwordInput" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <label className="container">Remember me </label>
                      <input type="checkbox" className="custom-control-input" id="customControlInline" />
                      <span className="checkmark" />
                    </div>
                  </div>
                </form>
                <button type="button" name="button" id="loginButton" className="btn login_btn">Login</button>
                <div className="d-flex justify-content-center links">
                  Don't have an account? <a href="/signup" className="ml-2">Sign Up!</a>
                </div>
                <div className="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
