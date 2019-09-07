
import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer"
//import ImageCard, { Button } from "./components/Button";
//import NavBar, { DropDown } from "./components/DropDown";
//import Form from "./components/Form";
import Card from "./components/Card/Card";

//import images from "./images.json";
//import "./App.css";

class App extends Component {
  state = {};

  render() {
  return [<div />, <Header />,<Card />, <Footer />];
  }
}
export default App;