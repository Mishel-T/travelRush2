import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SearchContainer from "./components/SearchContainer";
// import DropDown from "./components/DropDown";
// import SearchForm from "./components/SearchForm";
// import { InputFlight, InputDrive, InputDate } from "./components/Form";
// import Form from "./components/Form";

import WeatherCardContainer from "./components/Card/Weather";
import Card from "./components/Card/Card"
// import CardContainer from "./components/Card/cardContainer"
// import CollectionContainer from "./components/Card/collectionContainer";
//import images from "./images.json";
//import "./App.css";



class App extends Component {
  state = {};

  render() {

  return [<div />, <Header />, <Footer />, <SearchContainer />, <WeatherCardContainer />,
    <Card name='Restaurants' img="restaurant-img" cardTitle="restaurant-name" value="restaurants" btnName="restaurant" contentID="restaurant-info" title="restaurant-title" rating="restaurant-rating" price="restaurant-price" url="restaurant-url"></Card>,
    <Card name='Coffee' img="coffee-img" cardTitle="coffee-name" value="coffee" btnName="free_breakfast" contentID="coffee-info" title="coffee-title" rating="coffee-rating" price="coffee-price" url="coffee-url"></Card>,
    <Card name='Hotels' img="hotel-img" cardTitle="hotel-name" value="hotels" btnName="hotel" contentID="hotel-info" title="hotel-title" rating="hotel-rating" price="hotel-price" url="hotel-url"></Card>];

  }
}
export default App;
