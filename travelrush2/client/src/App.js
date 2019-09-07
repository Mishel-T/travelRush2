import React, { Component } from "react";
import SearchContainer from "./components/SearchContainer";
import DropDown from "./components/DropDown";
import SearchForm from "./components/SearchForm";
import { InputFlight, InputDrive, InputDate } from "./components/Form";
//import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <SearchContainer></SearchContainer>
      </div>
    );
  }
}

export default App;
