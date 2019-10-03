import React from "react";
import { Link } from "react-router-dom";
import Signup from "./components/SignUp/signUp";

function Route() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
}
/* Corona..
  Is path="/user" the protected route which accesses the token to display user info?
  e.g <Route exact path="/user" component={MyAccount} />
  }
  */

export default Route;
