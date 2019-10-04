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
      this.setState({ search: this.props.parentState, request: false }, () => {
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

  updateCard = () => {
    if (!this.state.search) {
      return [
        <EmptyCard
          name="Restaurants"
          img="restaurant-img"
          cardTitle="restaurant-name"
          value="restaurants"
          btnName="restaurant"
          contentID="restaurant-info"
          title="restaurant-title"
          rating="restaurant-rating"
          price="restaurant-price"
          url="restaurant-url"
        ></EmptyCard>,
        <EmptyCard
          name="Coffee"
          img="coffee-img"
          cardTitle="coffee-name"
          value="coffee"
          btnName="free_breakfast"
          contentID="coffee-info"
          title="coffee-title"
          rating="coffee-rating"
          price="coffee-price"
          url="coffee-url"
        ></EmptyCard>,
        <EmptyCard
          name="Hotels"
          img="hotel-img"
          cardTitle="hotel-name"
          value="hotels"
          btnName="hotel"
          contentID="hotel-info"
          title="hotel-title"
          rating="hotel-rating"
          price="hotel-price"
          url="hotel-url"
        ></EmptyCard>
      ];
    } else if (this.state.collectionClicked === true) {
      return [
        [
          <div className="card">
            <div className="collection">
              {this.state.responsedetail2.map((businesses, index) => (
                <CollectionCard
                  key={index}
                  urlplaceholder={businesses.url}
                  name={businesses.name}
                  price={businesses.price}
                  distance={
                    Math.round(businesses.distance * 0.000621371192 * 10) / 10
                  }
                  onClick={this.addToFaves}
                ></CollectionCard>
              ))}
            </div>
          </div>,

          <div className="card">
            <div className="collection">
              {this.state.responsedetail3.map((businesses, index) => (
                <CollectionCard
                  key={index}
                  urlplaceholder={businesses.url}
                  name={businesses.name}
                  price={businesses.price}
                  distance={
                    Math.round(businesses.distance * 0.000621371192 * 10) / 10
                  }
                  onClick={this.addToFaves}
                ></CollectionCard>
              ))}
            </div>
          </div>,

          <div className="card">
            <div className="collection">
              {this.state.responsedetail1.map((businesses, index) => (
                <CollectionCard
                  key={index}
                  urlplaceholder={businesses.url}
                  name={businesses.name}
                  price={businesses.price}
                  distance={
                    Math.round(businesses.distance * 0.000621371192 * 10) / 10
                  }
                  onClick={this.addToFaves}
                ></CollectionCard>
              ))}
            </div>
          </div>
        ]
      ];
    } else {
      return [
        <Card
          name={this.state.response2.title}
          img="restaurant-img"
          imgsrc={this.state.response2.image}
          cardTitle="restaurant-name"
          nameEntry={this.state.response2.name}
          value="restaurants"
          btnName="restaurant"
          contentID="restaurant-info"
          title="restaurant-title"
          rating="restaurant-rating"
          ratingEntry={this.state.response2.rating}
          price="restaurant-price"
          priceEntry={this.state.response2.price}
          url="restaurant-url"
          urlEntry={this.state.response2.url}
          onClick={this.handleCollection}
        ></Card>,

        <Card
          name={this.state.response3.title}
          img="coffee-img"
          imgsrc={this.state.response3.image}
          cardTitle="coffee-name"
          nameEntry={this.state.response3.name}
          value="coffee"
          btnName="free_breakfast"
          contentID="coffee-info"
          title="coffee-title"
          rating="coffee-rating"
          ratingEntry={this.state.response3.rating}
          price="coffee-price"
          priceEntry={this.state.response3.price}
          url="coffee-url"
          urlEntry={this.state.response3.url}
          onClick={this.handleCollection}
        ></Card>,

        <Card
          name={this.state.response1.title}
          img="hotel-img"
          imgsrc={this.state.response1.image}
          cardTitle="hotel-name"
          nameEntry={this.state.response1.name}
          value="hotels"
          btnName="hotel"
          contentID="hotel-info"
          title="hotel-title"
          rating="hotel-rating"
          ratingEntry={this.state.response1.rating}
          price="hotel-price"
          priceEntry={this.state.response1.price}
          url="hotel-url"
          urlEntry={this.state.response1.url}
          onClick={this.handleCollection}
        ></Card>
      ];
    }
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
