import React, { Component } from "react";

//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router, Route, Link } from "react-router-dom";
// import Route from "./components/Route/route";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Signup from "./components/SignUp/signUp";
import PageContainer from "./pages/PageContainer";
import MyAccount from "./pages/MyAccount/MyAccount";
import history from "../src/utils/history";
import { TransitionsModal as Login } from "./components/Modal/modal";

// import Footer from "./components/footer/footer";
// import SearchContainer from "./components/SearchContainer";
// import WeatherCard from "./components/Card/WeatherCard/WeatherCard";
// import SignUp from "./components/SignUp/signUp";
// import DropDown from "./components/DropDown";
// import SearchForm from "./components/SearchForm";
// import { InputFlight, InputDrive, InputDate } from "./components/Form";
// import Form from "./components/Form";

// import WeatherCardContainer from "./components/Card/WeatherCard/Weather";
// import Card from "./components/Card/YelpCard/Card";
// import CardContainer from "./components/Card/YelpCard/cardContainer"
// import CollectionContainer from "./components/Card/YelpCard/collectionContainer";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={PageContainer} />
          {/* <Route path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/myaccount" component={MyAccount} />

          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
