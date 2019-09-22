import React, { Component } from "react";
// import Home from ""
// import LogIn from ""
import SignIn from "./SignIn/signIn";

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
        } else if (this.state.currentPage === "Sign In") {
          return <SignIn />;
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