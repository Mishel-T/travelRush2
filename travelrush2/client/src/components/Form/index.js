import React from "react";

// This file exports the various inputs and FormBtn components

export function InputFlight(props) {
  return (
    <div>
      <div className="input-field col s6"></div>
      <i className="material-icons prefix">flight_land</i>
      <input
        {...props}
        id="icon_prefix"
        type="text"
        className="validate"
      ></input>
      <label for="icon_prefix"></label>
    </div>
  );
}

export function InputDrive(props) {
  return (
    <div>
      <div className="input-field col s6"></div>
      <i className="material-icons prefix">directions_car</i>
      <input
        {...props}
        id="icon_prefix"
        type="text"
        className="validate"
      ></input>
      <label for="icon_prefix"></label>
    </div>
  );
}

export function InputDate(props) {
  return (
    <div>
      <input {...props} type="text" className="datepicker"></input>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      className="btn waves-effect waves-light"
      type="submit"
      name="action"
    >
      Submit
      <i className="material-icons right">send</i>
    </button>
  );
}

/*
<DropDown>onChange={this.handleDropChange}</DropDown>
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
