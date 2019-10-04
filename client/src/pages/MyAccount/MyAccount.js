import React from "react";
import FlightInfoCard from "../../components/Card/FlightInfoCard/FlightInfoCard";
// import FavoritesCard ".../components/Card/FavoritesCard/FavoritesCardContainer"
// import PastSearchesCard ".../components/Card/PastSearchesCard/PastSearhesCardContainer"
// import FlightInfo ".../components/Card/FlightInfoCard/FlightInfoCardContainer"

class MyAccount extends Component {
    //if stat is user is logged in, user will be able to view the page
    // ELSE
    //user will be redirected to LOGIN

render() {
    return   <div>
    {/* <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        /> */}
    
    <FlightInfoCard></FlightInfoCard>
    {this.renderPage()}
  </div>
    // <Favorites />,
    // <PastSearch />,
    // <FlightInfo />
}
}

export default MyAccount;