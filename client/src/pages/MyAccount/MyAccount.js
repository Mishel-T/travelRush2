import React, { Component } from "react";
import FavoritesCard from "../../components/Card/FavoritesCard/FavoritesCard";
import FlightInfoCard from "../../components/Card/FlightInfoCard/FlightInfoCard";
import { currentUser } from "../../utils/API";

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
        this.setState({ owner: user.data.id }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  render() {
    return [
      <div>
        <h3>Favorites</h3>
      </div>,
      <div className="card">
        <h5>Restaurants</h5>
        <div className="collection">
          <FavoritesCard name="The Salted Pig" location="Riverside, CA" />
          <FavoritesCard name="Fonda Don Chon" location="West Covina, CA" />
        </div>
      </div>,
      <div className="card">
        <h5>Coffee</h5>
        <div className="collection">
          <FavoritesCard
            name="Arcade Coffee Roasters"
            location="Riverside, CA"
          />
          <FavoritesCard name="Coffeeholic" location="West Covina, CA" />
        </div>
      </div>,
      <div className="card">
        <h5>Hotels</h5>
        <div className="collection">
          <FavoritesCard
            name="America's Best Value Inn Riverside"
            location="Riverside, CA"
          />
          <FavoritesCard
            name="Holiday Inn West Covina"
            location="West Covina, CA"
          />
        </div>
      </div>,
      <div>
        <FlightInfoCard></FlightInfoCard>
      </div>
    ];
  }
}

export default MyAccount;
