import React from "react";
import M from "materialize-css";
// import "date-fns";
// import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// } from "@material-ui/pickers";

// This file exports the various inputs and FormBtn components

export function InputFlight(props) {
  return (
    <div>
      <div className="input-field col s6">
        <i className="material-icons prefix">flight_land</i>
        <input
          {...props}
          id="airport"
          type="text"
          className="autocomplete validate"
        ></input>
        <label htmlFor="autocomplete-airport"></label>
      </div>
    </div>
  );
}

export function InputDrive(props) {
  return (
    <div>
      <div className="input-field col s6">
        <i className="material-icons prefix">directions_car</i>
        <input {...props} id="address" type="text" className="validate"></input>
        <label htmlFor="address"></label>
      </div>
    </div>
  );
}

// const handleDateChange = e => {
//   const onSelect = selectedDate => {
//     console.log(selectedDate);
//   };
//   const elems = document.querySelectorAll(".datepicker");
//   const instances = M.Datepicker.init(elems, onSelect);
//   console.log("I am here....");
//   //console.log("DATE", e.target.value);
// };

export function InputDate(props) {
  //console.log(props);
  return (
    <div>
      <div className="input-field col s6">
        <i className="material-icons prefix">date_range</i>

        {/* <DatePicker
          label="Basic example"
          value={Date()}

          animateYearScrolling
        /> */}
        <input id="date" {...props} type="text" className="datepicker"></input>
      </div>
    </div>
  );
}

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date());

//   function handleDateChange(date) {
//     setSelectedDate(date);
//   }

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change date"
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }

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
