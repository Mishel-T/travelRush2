import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/SignUp/signUp";

function Route() {
    return (
      <Router>
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
      </Router>
    );
  }
  

  export default Route;
  