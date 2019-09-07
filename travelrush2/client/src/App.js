import React, { Component } from "react";
import SearchContainer from "./components/SearchContainer";
import DropDown from "./components/DropDown";
import SearchForm from "./components/SearchForm";
import { InputFlight, InputDrive, InputDate } from "./components/Form";
import Form from "./components/Form";
import Header from "./components/header/header";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return [<div />, <Header />, <Footer />];
}
export default App;