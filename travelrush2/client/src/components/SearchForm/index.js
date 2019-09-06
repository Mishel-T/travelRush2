import React, { Component } from "react";
import { InputFlight, InputDrive, InputDate, FormBtn } from "./Form";
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

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    //Now do the necessary API calls....
    //Remember that the state has the necessary inputs/search parameters.
  };

  handleOnchange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value }).catch(err => console.log("error"));
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
                onChange={handleOnchange}
                name="airport"
              ></InputFlight>
            ) : (
              <InputDrive onChange={handleOnchange} name="address"></InputDrive>
            )}
            <InputDate onChange={handleOnchange} name="date"></InputDate>
          </div>
          <div className="row">
            <FormBtn onClick={handleOnClick}></FormBtn>
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
