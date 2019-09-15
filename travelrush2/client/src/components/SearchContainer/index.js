import React, { Component } from "react";
import SearchForm from "../SearchForm";
import DropDown from "../DropDown";
import AutocompleteFlight from "../AutocompleteFlight";

class SearchContainer extends Component {
  state = {
    airport: "",
    address: "",
    date: ""
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
  //how do I get the state variables from the SearchForm???
  render() {
    return (
      <div>
        <DropDown></DropDown>
      </div>
    );
  }
}

export default SearchContainer;
