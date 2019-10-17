import React, { Component, Fragment } from "react";
import FavoritesCard from "../../components/Card/FavoritesCard/FavoritesCard";
import FlightInfoCard from "../../components/Card/FlightInfoCard/FlightInfoCard";
import { currentUser, getFavorites } from "../../utils/API";

class MyAccount extends Component {
  //if stat is user is logged in, user will be able to view the page
  // ELSE
  //user will be redirected to LOGIN
  state = {
    restaurant: [],
    coffee: [],
    hotel: [],
    owner: ""
  };

  componentDidMount() {
    //Make request to get id of current user
    // const { id } = this.getCurrentUser();
    // this.setState({ owner: id }, () => console.log(this.state));
    this.getCurrentUser();
  }

  getCurrentUser() {
    const authToken = localStorage.getItem("tokenKey");
    console.log(authToken);
    currentUser(authToken)
      .then(user => {
        //console.log(user)
        this.setState({ owner: user.data.id }, () => {
          console.log(this.state);
          this.getAllFavorites();
        });
      })
      .catch(err => console.log(err));
  }
  getAllFavorites() {
    if (this.state.owner !== "") {
      getFavorites(this.state.owner)
        .then(dbUser => {
          console.log("The restaurant array is : ");
          console.log(dbUser);
          this.setState(
            {
              restaurant: dbUser.data.restaurant,
              coffee: dbUser.data.coffee,
              hotel: dbUser.data.hotel
            },
            () => console.log(this.state)
          );
          // this.setState({ coffee: user.coffee }, () => console.log(this.state));
          // this.setState({ hotel: user.hotel }, () => console.log(this.state));
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return [
      <div>
        <h3>Favorites</h3>
      </div>,
      <div className="card">
        <h5>Restaurants</h5>
        <div className="collection">
          {this.state.restaurant.map((restaurants, index) => (
            <FavoritesCard
              name={restaurants.name}
              location={restaurants.location}
            />
          ))}
        </div>
      </div>,
      <div className="card">
        <h5>Coffee</h5>
        <div className="collection">
          <div className="collection">
            {this.state.coffee.map((coffee, index) => (
              <FavoritesCard name={coffee.name} location={coffee.location} />
            ))}
          </div>
        </div>
      </div>,
      <div className="card">
        <h5>Hotels</h5>
        <div className="collection">
          {this.state.hotel.map((hotel, index) => (
            <FavoritesCard name={hotel.name} location={hotel.location} />
          ))}
        </div>
      </div>,
      <div>
        <FlightInfoCard></FlightInfoCard>
      </div>
    ];
  }
}

export default MyAccount;
