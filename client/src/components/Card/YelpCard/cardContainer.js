//container to render the first Card component once the api call is made to display the 0 index card
//container needs to be loaded on searchForm click event - need to pull latitude and longitude from searchForm
import React, { Component } from "react";
import Card from "./Card";
import EmptyCard from "./emptyCard";
//import CollectionContainer from "./collectionContainer"
import CollectionCard from "./collectionCard";
import { yelpSearch } from "../../../utils/API";

class CardContainer extends Component {
  state = {
    response1: {},
    response2: {},
    response3: {},
    responsedetail1: [],
    responsedetail2: [],
    responsedetail3: [],
    collectionClicked: false,
    request: false
  };

  componentDidUpdate() {
    if (this.props.parentState && !this.state.search) {
      const { searchContainInput } = this.props.parentState;
      this.setState({ search: this.props.parentState, request: true }, () => {
        this.searchYelp();
        //Not sure how to use call back/promise for lines 27 - 29
        if (!this.isEmptyResponses()) {
          this.setState({ request: false });
        }

        // console.log("Request is " + this.state.request);
        // if (this.state.request) {
        //   setTimeout(this.setState({ request: false }), 3000);
        // }
      });
    }
  }

  isEmptyResponses() {
    return (
      typeof this.state.response1 === "object" &&
      Object.keys(this.state.response1).length === 0 &&
      (typeof this.state.response2 === "object" &&
        Object.keys(this.state.response2).length === 0) &&
      (typeof this.state.response3 === "object" &&
        Object.keys(this.state.response3).length === 0)
    );
  }
  searchYelp = search => {
    var call1 = yelpSearch(
      "hotels",
      this.state.search.coordLoc.long,
      this.state.search.coordLoc.lat
    );
    var call2 = yelpSearch(
      "restaurants",
      this.state.search.coordLoc.long,
      this.state.search.coordLoc.lat
    );
    var call3 = yelpSearch(
      "coffee",
      this.state.search.coordLoc.long,
      this.state.search.coordLoc.lat
    );

    call3.then(response3 => {
      var coffeeInfo = {
        name: response3.data.businesses[0].name,
        image: response3.data.businesses[0].image_url,
        url: response3.data.businesses[0].url,
        price: response3.data.businesses[0].price,
        rating: response3.data.businesses[0].rating,
        title: response3.data.businesses[0].categories[0].title
      };
      this.setState({
        response3: coffeeInfo,
        responsedetail3: response3.data.businesses
      });
    });

    call1.then(response1 => {
      var hotelsInfo = {
        name: response1.data.businesses[0].name,
        image: response1.data.businesses[0].image_url,
        url: response1.data.businesses[0].url,
        price: response1.data.businesses[0].price,
        rating: response1.data.businesses[0].rating,
        title: response1.data.businesses[0].categories[0].title
      };
      this.setState({
        response1: hotelsInfo,
        responsedetail1: response1.data.businesses
      });
    });

    call2.then(response2 => {
      var restaurantsInfo = {
        name: response2.data.businesses[0].name,
        image: response2.data.businesses[0].image_url,
        url: response2.data.businesses[0].url,
        price: response2.data.businesses[0].price,
        rating: response2.data.businesses[0].rating,
        title: response2.data.businesses[0].categories[0].title
      };
      this.setState({
        response2: restaurantsInfo,
        responsedetail2: response2.data.businesses
      });
    });
  };

  handleCollection = event => {
    event.preventDefault();
    this.setState({ collectionClicked: true });
  };

  addToFaves = event => {
    event.preventDefault();
    alert("Please login to save items to your Favorites");
  };

  render() {
    console.log("state", this.state);

    return (
      <div>
        {this.updateCard()}
        <div>
          {this.state.request ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default CardContainer;

/*

    render() {
        
        return (<div>
            {this.updateCard()}

}*/
