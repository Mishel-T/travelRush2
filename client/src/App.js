import React, { Component } from "react";
import { BrowserRouter, Router, Route, withRouter } from "react-router-dom";
// import Route from "./components/Route/route";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Signup from "./components/SignUp/signUp";
import Login from "./components/Modal/modal";
import PageContainer from "./pages/PageContainer";
import MyAccount from "./pages/PageContainer";
import history from "./utils/history";
import { Modal } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={PageContainer} />
          {/* <Route path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/myaccount" component={MyAccount} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
