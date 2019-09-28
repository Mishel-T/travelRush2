import React, { Component } from "react";
// import Home from ""
// import LogIn from ""
import SignUp from "./SignUp/signUp";
import SearchContainer from "./SearchContainer";
import CardContainer from "./Card/YelpCard/cardContainer"
import WeatherCardContainer from "./Card/WeatherCard/Weather";


class PageContainer extends Component {
    state = {
      currentPage: "Home"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
          return <div>HOME</div>;
        // } else if (this.state.currentPage === "Login") {
        //   return <Login />;
        } else if (this.state.currentPage === "Sign Up") {
          return <SignUp />;
        }
      };

      render() {
        return (
          <div>
            {/* <NavTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            /> */}
            <SearchContainer appcb={this.callbackFunction} />
      <WeatherCardContainer parentState={this.state.searchLocation} />
      <CardContainer parentState={this.state.searchLocation} />
            {this.renderPage()}
          </div>
        );
      }
    }
    
    export default PageContainer;