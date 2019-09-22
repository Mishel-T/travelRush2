import React, { Component } from "react";
import { InputFlight, InputDrive, InputDate, FormBtn } from "../Form";
import DropDown from "../DropDown";
import { airportFinderSearch, googleSearch } from "../../utils/API.js";
import InputAutoFlight from "../InputAutoFlight";
import AutocompleteFlight from "../AutocompleteFlight";

//import ImageCard, { Button } from "./components/Button";
//import NavBar, { DropDown } from "./components/DropDown";
//import Form from "./components/Form";
//import images from "./images.json";
//import "./App.css";

class SearchForm extends Component {
  state = {
    airport: "",
    address: "",
    date: "",
    coordLoc: { long: 0, lat: 0 },
    airportList: []
  };

  componentDidMount() {
    const datePicker = document.getElementById("date");
    console.log(datePicker);
    //handle change for the date
    datePicker.addEventListener("change", () => {
      this.setState({ date: datePicker.value });
      console.log(this.state.date);
    });
    // const autocompleteFly = document.getElementById("airport");
    // console.log(autoCompleteFly);
    //handle change for the flight
  }

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    //**MAKE SURE THAT THE SUBMIT BUTTON DOESN'T EXECUTE UNLESS THE USER HAS SUPPLIED THE REQUIRED INPUTS! **/
    //Now do the necessary API calls....
    //Remember that the state has the necessary inputs/search parameters.
    //console.log(this.state);
    //API calls
    //return this.state;
    console.log("Travel mode is " + this.props.travelMode);
    if (this.props.travelMode === "1") {
      //airport
      this.getCoordinates("airport");
    } else if (this.props.travelMode === "2") {
      //address
      this.getCoordinates("address");
    }
  };
  //handles address input by extracting and updating its coordinates
  handleOnBlur = event => {
    const {
      target: { name, value }
    } = event;
    console.log("I am inside blur event");
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
    //.catch(err => console.log("error"));
  };

  // handleOnSelect = event => {
  //   const {
  //     target: { name, value }
  //   } = event;
  //console.log(name);

  // console.log("I am inside the select event");
  // console.log(event.target);
  //console.log(name);
  //console.log(value);
  //this.setState({ [name]: value });
  //console.log(event.target.textContent);
  //.catch(err => console.log("error"));
  // };
  handleOnChange = event => {
    console.log("I am inside change event");
    console.log(event.target.name);
    console.log(event.target.value);
  };

  //Handles the date input
  handleDateChange = event => {
    //console.log("I am inside the date event");
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value }, () => {
      console.log(event.target.value);
    });
  };

  // getAirport = airport => {
  //   //Use Airport finder API to get list of airports
  //   airportFinderSearch(this.state.coordLoc.long, this.state.coordLoc.lat)
  //     .then()
  //     .catch(err => console.log(err));
  // };

  //Helper function to get the coordinates for an address or airport.
  getCoordinates = (transportMode, cb) => {
    //Use geocoding API to get address
    // let indexOfComma = this.state.address.indexOf(",");
    // let queryCity = this.state.address.substring(0, indexOfComma);
    // queryCity = queryCity.replace(" ", "+");
    // let queryState = this.state.address.substring(indexOfComma + 2);
    // queryState = queryState.replace(" ", "+");
    let formattedAddress;
    if (transportMode === "airport") {
      formattedAddress = this.state.airport.replace(" ", "+");
    } else {
      formattedAddress = this.state.address.replace(" ", "+");
    }

    googleSearch(formattedAddress)
      .then(response => {
        console.log(response);
        let coordLat = response.data.results[0].geometry.location.lat;
        let coordLong = response.data.results[0].geometry.location.lng;
        //console.log(response.data.results);
        this.setState({ coordLoc: { long: coordLong, lat: coordLat } }, () => {
          console.log(this.state.coordLoc);
          this.props.dropcb(this.state);
          console.log("Checking state", this.state);
        });
      })
      .catch(err => console.log(err));

    //1043 Santo Antonio drive, Colton, CA 92324
  };

  //Call back function passes airport input from the Autocomplete component(child to parent data flow).
  callbackFunction = autocompleteInput => {
    this.setState({ airport: autocompleteInput });
  };

  /*
  handleDropClick = event => {
    //prevent default behavior
    event.preventDefault();
    if (this.event.target.getAttribute(data - value) === "1") {
      //If user chose to fly, then hide `Form` for the destination address
      this.optionDrive.style.display = "none";
    } else if (this.event.target.getAttribute(data - value) === "2") {
      //If user chose to drive, then hide `Form` for the airport address
      this.optionFly.style.display = "none";
    }
  };*/
  //How does button component know to submit my two forms?
  render() {
    return (
      <div>
        <form className="col s12">
          <div className="row">
            {this.props.travelMode === "1" ? (
              <div className="col s6">
                <AutocompleteFlight
                  searchFormcb={this.callbackFunction}
                ></AutocompleteFlight>
              </div>
            ) : (
              <InputDrive
                address={this.state.address}
                onBlur={this.handleOnBlur}
                name="address"
              ></InputDrive>
            )}
            <InputDate
              date={this.state.date}
              value={this.state.date}
              onChange={this.handleDateChange}
              name="date"
            ></InputDate>
          </div>
          <div className="row">
            <div className="col offset-s6">
              <FormBtn onClick={this.handleOnClick}></FormBtn>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;

/* render() {
    return (
      <div>
        {this.props.data - choice === "1" ? (
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="address-dest"
                  className="materialize-textarea"
                  onChange={handleOnchange}
                ></textarea>
                <label for="address-dest">{this.state.airportAddress}</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="date-dest"
                  className="materialize-textarea"
                  onChange={handleOnchange}
                ></textarea>
                <label for="date-dest">{this.state.date}</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={handleOnClick}
            >
              Submit
              <i class="material-icons right">flight_takeoff</i>
            </button>
          </form>
        ) : (
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="address-dest"
                  className="materialize-textarea"
                  onChange={handleOnchange}
                ></textarea>
                <label for="address-dest">{this.state.address}</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="date-dest"
                  className="materialize-textarea"
                  onChange={handleOnchange}
                ></textarea>
                <label for="date-dest">{this.state.date}</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={handleOnClick}
            >
              Submit
              <i class="material-icons right">flight_takeoff</i>
            </button>
          </form>
        )}
      </div>
    );
  }*/
