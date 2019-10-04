import React, { Component } from "react";
// import Home from ""
// import LogIn from ""
import SignUp from "../components/SignUp/signUp";
import SearchContainer from "../components/SearchContainer";
import CardContainer from "../components/Card/YelpCard/cardContainer"
import WeatherCardContainer from "../components/Card/WeatherCard/Weather";
import FlightInfoCardContainer from "../components/Card/FlightInfoCard/FlightInfoCardContainer"
import FlightInfoCard from "../components/Card/FlightInfoCard/FlightInfoCard";


class PageContainer extends Component {
  state = {
    currentPage: "Home",
    airportInfo: ""
  };

  callbackFunction = searchContainInput => {
    console.log(searchContainInput.coordLoc.lat + "= Lat");
    console.log(searchContainInput.coordLoc.long + "= Long");
    //this.componentDidMount(searchContainInput);
    this.setState({
      searchLocation: searchContainInput
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <div></div>;
      // } else if (this.state.currentPage === "Login") {
      //   return <Login />;
    } else if (this.state.currentPage === "Sign Up") {
      return <SignUp />;
    }
  };

  render() {
    return   <div>
    {/* <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        /> */}
    <SearchContainer appcb={this.callbackFunction} />
    <WeatherCardContainer parentState={this.state.searchLocation} />
    <CardContainer parentState={this.state.searchLocation} />
    {this.renderPage()}
  </div>
  }
}

export default PageContainer;