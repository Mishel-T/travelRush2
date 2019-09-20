import React, { Component } from "react";
import SearchForm from "../SearchForm";
import DropDown from "../DropDown";
import AutocompleteFlight from "../AutocompleteFlight";

class SearchContainer extends Component {
  state = {
    travelChoice: "0",
    airport: "",
    address: "",
    date: "",
    coordLoc: { long: 0, lat: 0 }
  };

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    //Now do the necessary API calls....
    //Remember that the state has the necessary inputs/search parameters.
  };

  handleOnchange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value }).catch(err => console.log("error"));
  };
  //call back is used to get user inputs from drop down
  // callbackFunction = dropInputs => {
  //   this.setState({ dropInputs }, () => {
  //     console.log(this.state);
  //     //send user input to call back in app.js
  //     this.props.appcb(this.state);
  //   });
  // };

  //how do I get the state variables from the SearchForm???
  render() {
    return (
      <div>
        <DropDown searchContaincb={this.props.appcb}></DropDown>
      </div>
    );
  }
}

export default SearchContainer;
