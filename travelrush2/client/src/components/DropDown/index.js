import React from "react";
import SearchForm from "SearchForm";

class DropDown extends Component {
  state = {
    travelChoice: ""
  };

  handleDropClick = event => {
    //prevent default behavior
    event.preventDefault();
    const travelMode = this.event.target.getAttribute("data-value");
    this.setState({ travelChoice: travelMode });
  };

  //How does button component know to submit my two forms?
  render() {
    return (
      <div>
        <a className="dropdown-trigger btn" href="#" data-target="dropdown1">
          Drop Me!
        </a>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!" data-value="1" onClick={props.handleDropClick}>
              Fly to your destination
            </a>
          </li>
          <li className="divider" tabindex="-1"></li>
          <li>
            <a href="#!" data-value="2" onClick={props.handleDropClick}>
              Drive to your destination
            </a>
          </li>
        </ul>
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
