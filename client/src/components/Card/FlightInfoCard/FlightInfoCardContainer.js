
import React from "react";
import "./../Card.css";






const FlightInfoCardContainer = props => (

    <div className="card" >
    <div className="card-image">
        <img id="flight-img"  alt=""></img>
        <span className="card-title" id="flight-name"></span>
        <a className="btn-floating halfway-fab waves-effect waves-light red" id="more-flights" value="flights"><i className="material-icons">airplanemode_active</i></a>
    </div>
    <div className="card-content" id="flight-results" >
        <h5>Flight Information</h5>

 <form id="flightNumber-form">

   
  <div for="flight-input">Enter Your Flight Number: </div>
  <br/>

  <input onChange={props.handleInputChange} value={props.value} name="search" type="text" id="search" placeholder="ie: AA1234"/><br/>
  <br/>
  
  <button onClick={props.handleFormSubmit} id="select-flight" type="button" class="btn btn-primary"> Search</button>

</form>
  
        <table className="striped">
        <thead>
          <tr>
              <th>Airline Code</th>
              <th>Arrival</th>
              <th>Departure</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{props.airline}</td>
            <td>{props.arrival}</td>
            <td>{props.departure}</td>
          </tr>
          </tbody>

          <thead>
          <tr>
              <th>Registration</th>
              <th>Status</th>
              <th>Altitude</th>
          </tr>
        </thead>

          <tbody>
          <tr>
            <td>{props.registration}</td>
            <td>{props.status}</td>
            <td>{props.altitude}</td>
          </tr>

        </tbody>
      </table>


    </div>
    <div className="card-action">
        <a href="#"></a>
    </div>
</div>

);

export default FlightInfoCardContainer;


//initiating API call for flight info

// var APIKey = "ebe432-13fff1";
// var inputFlight = $("#flight-input").text().trim();





// function searchAirlineInfo() 
// {

// axios.get("https://aviation-edge.com/v2/public/flights?key=" + APIKey +"&flightIata=" +inputFlight)
//     .then(res => {
//       const flights = res.data;
//       console.log(flights)

    
//     })
// }

// searchAirlineInfo();






// function searchAirlineInfo(flights) {
//   // This is my paid API key :
//   var APIKey = "ebe432-13fff1";
//   // Here is the queryURL variable that stores the URL
//   var queryURL = "https://aviation-edge.com/v2/public/flights?key=" + APIKey;
//   // Running AJAX call to the Aviation Edge API
//   HTMLElement.ajax({
//   url: queryURL,
//   dataType: "html",
//   method: "GET"
//   })
  // Storing all of the retrieved data inside of an object called "response"
  
  // .then(function(response) {
  // // Logging the queryURL
  // console.log(queryURL);
  // var data = JSON.parse(response);
  //   var searchTerm = document.getElementById("flight-input").value;
  //   console.log(searchTerm);
  //   var filtered = data.filter(function(flight){
  //     console.log(flight.flight.iataNumber)
  //      return flight.flight.iataNumber === searchTerm;
  // })
  // console.log(filtered)
    
  // })

  // HTMLElement("#select-flight").on("click", function(event){
  //   // Preventing the button from trying to submit the form
  //   event.preventDefault();
  //   // Storing the flight info
  //   var inputFlight = document.getElementById("#flight-input").val().trim();
  //   // Running the searchAirlineInfo function (passing in the flight as argument)
  //   searchAirlineInfo(inputFlight);


// }

//   );


