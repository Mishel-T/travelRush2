import React, { Component } from "react";
import { InputFlight, InputDrive, InputDate, FormBtn } from "../Form";
import DropDown from "../DropDown";

//import ImageCard, { Button } from "./components/Button";
//import NavBar, { DropDown } from "./components/DropDown";
//import Form from "./components/Form";
//import images from "./images.json";
//import "./App.css";

class SearchForm extends Component {
  state = {
    airport: "",
    address: "",
    date: ""
  };

  componentDidMount() {
    const datePicker = document.getElementById("date");
    console.log(datePicker);
    //handle change for the date
    datePicker.addEventListener("change", () => {
      this.setState({ date: datePicker.value });
      console.log(this.state.date);
    });
  }

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    //Now do the necessary API calls....
    //Remember that the state has the necessary inputs/search parameters.
    console.log(this.state);
  };

  handleOnChange = event => {
    const {
      target: { name, value }
    } = event;
    console.log("I am inside change event");
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

  handleDateChange = event => {
    //console.log("I am inside the date event");
    console.log(event.target.value);
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
              <InputFlight
                airport={this.state.airport}
                onChange={this.handleOnChange}
                name="airport"
              ></InputFlight>
            ) : (
              <InputDrive
                address={this.state.address}
                onChange={this.handleOnChange}
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
            <FormBtn onClick={this.handleOnClick}></FormBtn>
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
