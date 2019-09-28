import React, { Component } from "react";
import M from "materialize-css";

class InputAutoFlight extends Component {
  state = {
    airport: "",
    address: "",
    date: ""
  };

  componentDidMount() {
    // let tesData = {
    //   Apples: null,
    //   Oranges: null,
    //   Grapes: null,
    //   Strawberries: null
    // };
    // //console.log(JSON.stringify(tesData));
    // tesData = JSON.stringify(tesData);
    // console.log(tesData);
    // // document.addEventListener("DOMContentLoaded", function() {
    // const elems = document.querySelectorAll(".autocomplete");
    // console.log(elems[0]);
    // const instances = M.Autocomplete.init(elems, {
    //   data: tesData
    // });
    // console.log(instances);
    // // });
  }

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    //Now do the necessary API calls....
    //Remember that the state has the necessary inputs/search parameters.
  };

  handleOnchange = event => {
    //   const {
    //     target: { name, value }
    //   } = event;
    //   this.setState({ [name]: value }).catch(err => console.log("error"));
    // };
    //how do I get the state variables from the SearchForm???
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s6">
              <i className="material-icons prefix">flight_land</i>
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
              <label htmlFor="autocomplete-input">Autocomplete</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputAutoFlight;
