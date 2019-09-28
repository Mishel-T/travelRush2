import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Route from "./components/Route/route";
import Header from "./components/header/header";
import Signup from "./components/SignUp/signUp";
import PageContainer from './pages/PageContainer';

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

  //state = { coordLat: "", coordLong: "" };
  // state = {
  //   airportInfo: ""
  // };
  // // componentDidMount(searchContainInput) {
  // //   this.setState({
  // //     searchLocation: { searchContainInput }
  // //   });
  // // }


  // callbackFunction = searchContainInput => {
  //   console.log(searchContainInput.coordLoc.lat + "= Lat");
  //   console.log(searchContainInput.coordLoc.long + "= Long");
  //   //this.componentDidMount(searchContainInput);
  //   this.setState({
  //     searchLocation: searchContainInput
  //   });
  // };

  render() {
    return (
      <Router>
        <div>
      <Header/>
      <Route exact path="/" component={PageContainer}/>
        {/* <Route path="/signup" component={SignUp} /> */}
        {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route exact path="/signup" component={Signup} />
          </div>
      </Router>
    )
  }
}
export default App;