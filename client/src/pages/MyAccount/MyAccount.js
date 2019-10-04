
import React, { Component } from "react";
import FavoritesCard from "../../components/Card/FavoritesCard/FavoritesCard"
import FlightInfoCard from "../../components/Card/FlightInfoCard/FlightInfoCard";



class MyAccount extends Component {
  //if stat is user is logged in, user will be able to view the page
  // ELSE
  //user will be redirected to LOGIN

  render() {
    return [
      <div>
      <h3>Favorites</h3>
      </div>,
      <div className="card" >
        <h5>Restaurants</h5>
        <div className="collection">
          <FavoritesCard
          name="The Salted Pig"
          location="Riverside, CA" />
          <FavoritesCard
            name="Fonda Don Chon"
            location="West Covina, CA" />
        </div>
      </div>,
      <div className="card" >
        <h5>Coffee</h5>
        <div className="collection">
          <FavoritesCard
            name="Arcade Coffee Roasters"
            location="Riverside, CA" />
          <FavoritesCard
            name="Coffeeholic"
            location="West Covina, CA" />
        </div>
      </div>,
      <div className="card" >
        <h5>Hotels</h5>
        <div className="collection">
          <FavoritesCard
            name="America's Best Value Inn Riverside"
            location="Riverside, CA" />
          <FavoritesCard
            name="Holiday Inn West Covina"
            location="West Covina, CA" />
        </div>
      </div>,
  <div>
     <FlightInfoCard></FlightInfoCard>
  </div>
    ];

  }
}

export default MyAccount;
