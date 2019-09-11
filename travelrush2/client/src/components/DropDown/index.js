import React, { Component } from "react";
import SearchForm from "../SearchForm";
import M from "materialize-css";
//import "materialize-css/dist/css/materialize.min.css";

class DropDown extends React.Component {
  state = {
    travelChoice: "0"
  };

  componentDidMount() {
    /*document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, options);
    });*/
    M.AutoInit();
  }

  handleDropClick = event => {
    //prevent default behavior
    event.preventDefault();
    const travelMode = event.target.getAttribute("data-value");
    this.setState({ travelChoice: travelMode });
  };

  //How does button component know to submit my two forms?
  render() {
    return (
      <div>
        <div className="row center">
          {this.state.travelChoice === "0" ? (
            <span>
              <h5 className="center-align">Search By:</h5>
            </span>
          ) : (
            ""
          )}
          <a className="dropdown-trigger btn" href="#" data-target="dropdown1">
            Drop Me!
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a href="#!" data-value="1" onClick={this.handleDropClick}>
                By airport
              </a>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <a href="#!" data-value="2" onClick={this.handleDropClick}>
                By address
              </a>
            </li>
          </ul>
        </div>

        <SearchForm travelMode={this.state.travelChoice} />
      </div>
    );
  }
}

export default DropDown;

/*
    if (this.event.target.getAttribute("data-value") === "1") {
      //If user chose to fly, then hide `Form` for the destination address
      
      //this.optionDrive.style.display = "none";
    } else if (this.event.target.getAttribute(data - value) === "2") {
      //If user chose to drive, then hide `Form` for the airport address
      this.optionFly.style.display = "none";
    }
  };*/
// This file exports the Input, TextArea, and FormBtn components
/*
export function DropDown(props) {
  return (
    <div class="input-field col s12">
      <select>
        <option value="" disabled selected>
          Choose your travel preference
        </option>
        <option value="1">Flight</option>
        <option value="2">Drive</option>
      </select>
      <label>Materialize Select</label>
    </div>
  );
}*/

/*<DropDown>onChange={this.handleDropChange}</DropDown>
        <Form
          ref={flyForm => {
            this.optionsFly = flyForm;
          }}
          onChange={this.handleOnChange}
        ></Form>
        <Form
          ref={driveForm => {
            this.optionsDrive = driveForm;
          }}
          onChange={this.handleOnChange}
        ></Form>
        <Form onChange={this.handleOnChange}></Form>

        <Button onClick={this.handleOnChange}></Button>*/
