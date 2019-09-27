import React, { Component } from "react";
// import Home from ""
// import LogIn from ""
import SignUp from "./SignUp/signUp";

class PageContainer extends Component {
    state = {
      currentPage: "Home"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
          return <Home />;
        // } else if (this.state.currentPage === "Login") {
        //   return <Login />;
        } else if (this.state.currentPage === "Sign Up") {
          return <SignUp />;
        }
      };

      render() {
        return (
          <div>
            <NavTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
          </div>
        );
      }
    }
    
    export default PageContainer;