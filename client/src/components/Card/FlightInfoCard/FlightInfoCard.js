import React, { Component } from "react";
import "./../../Card/Card.css";
import FlightInfoCardContainer from "../FlightInfoCard/FlightInfoCardContainer";
import API from "../../../utils/API";



class FlightInfoCard extends Component {
    state = {
        result: {},
        search: "",
        isLoaded: false,
        airlineIataCode: "",
        arrivalIataCode:"",
        departureIataCode:"",
        aircraftRegNumber:"",
        status:"",
        geographyAltitude:"",
      
        

   
    };

  

    componentDidMount() {
      console.log("RuNNING")
      this.searchFlight();
      };

    searchFlight = query => {
      console.log(query);
      API.search(query)
      .then(res => {
        console.log("succesful", res.data);
        this.setState({result: res.data,
                      isLoaded: true ,
                      airlineIataCode: res.data[0].airline.iataCode,
                      arrivalIataCode: res.data[0].arrival.iataCode,
                      departureIataCode: res.data[0].departure.iataCode,
                      aircraftRegNumber: res.data[0].aircraft.regNumber,
                      status: res.data[0].status,
                      geographyAltitude: res.data[0].geography.altitude,
           
                    
                    })
                   
      })
      .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value,
        isLoaded: true
      });

    };



    handleFormSubmit = event => {
      event.preventDefault();
      this.searchFlight(this.state.search);
    };
  


    render() {
      return (
        
        <FlightInfoCardContainer

      
        airline={this.state.airlineIataCode}
        arrival={this.state.arrivalIataCode}
        departure={this.state.departureIataCode}
        registration={this.state.aircraftRegNumber}
        status={this.state.status}
        altitude={this.state.geographyAltitude}

        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
          >

          </FlightInfoCardContainer>

      )
    }

    }

   
    export default FlightInfoCard; 

        // Storing all of the retrieved data inside of an object called "response"
        
//         .then(function(response) {
//         // Logging the queryURL
//         console.log(queryURL);
//         // Logging the resulting object (all airlines)
//         var data = JSON.parse(response);
//         var searchTerm = document.getElementById("flight-input").value;
//         console.log(searchTerm);
//         var filtered = data.filter(function(flight){
//             console.log(flight.flight.iataNumber)
//              return flight.flight.iataNumber === searchTerm;
//         })
//         console.log(filter)

//     });
// }


    


  
  
      // searchWeather = search => {
      //   var call1 = weatherSearch(this.state.search.coordLoc.long, this.state.search.coordLoc.lat);
      //   call1.then(response => {
  
      //     var weatherInfo = {
      //       dt_txt: response.data.list[1].dt_txt,
      //       description: response.data.list[1].weather[0].description,
      //       icon: response.data.list[1].weather[0].icon,
      //       temp: response.data.list[1].main.temp,
      //       speed: response.data.list[1].wind.speed,
      //       humidity: response.data.list[1].main.humidity
      //     };
      //     console.log(response)
      //    this.setState({ response: weatherInfo })
      //   });
      // }
    
      // render () {
        
      //   if (this.state.response.length == 0) {return <div>
      //     <div className="card" >
      // <div className="card-image">
      //     <img id="flightInfo-img" alt=""></img>
      //     <span className="card-title" id="FlightInfo-name"></span>
      //     <a className="btn-floating halfway-fab waves-effect waves-light red" id="more-weather" value="weather"><i className="material-icons">airplanemode_inactive</i></a>
      // </div>
      // <div className="card-content" id="flightInfo-results" >
      //     <p>Flight Information</p> 

      //     </div>
          
      //   </div>

      //   </div>;
      //   }
  
      //  return [
  
      //     <div>
         
      //     <FlightInfoCardContainer
          
      //               day={this.state.response.dt_txt}
      //               description={this.state.response.description}
      //               icon={this.state.response.icon}
      //               temperature={this.state.response.temp}
      //               wind={this.state.response.speed}
      //               humidity={this.state.response.humidity}
      //               >
  
      //               </FlightInfoCardContainer>
      //               </div>
  
      //   ];
  
      // };
  
      // };
      
          
      
