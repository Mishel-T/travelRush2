import React from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import FlightLand from "@material-ui/icons/FlightLand";
import {
  airportsList,
  airportFinderSearch,
  googleSearch
} from "../../utils/API.js";
//flight_land

//use API to set suggestions to airport names
// const suggestions = [];

// console.log("I am in Autosuggest!!!");
// airportsList()
//   .then(res => {
//     console.log(res);
//     for (let i = 0; i < airportsList().length; i++) {
//       suggestions.push({
//         label:
//           airportsList.city +
//           ", " +
//           airportsList.stateCode +
//           "(" +
//           airportsList.code +
//           " - " +
//           airportsList.name +
//           ")"
//       });
//     }
//   })
//   .catch(err => console.log(JSON.parse(JSON.stringify(err))));

//console.log(suggestions);
// const suggestions = [
//   { label: "Afghanistan" },
//   { label: "Aland Islands" },
//   { label: "Albania" },
//   { label: "Algeria" },
//   { label: "American Samoa" },
//   { label: "Andorra" },
//   { label: "Angola" },
//   { label: "Anguilla" },
//   { label: "Antarctica" },
//   { label: "Antigua and Barbuda" },
//   { label: "Argentina" },
//   { label: "Armenia" },
//   { label: "Aruba" },
//   { label: "Australia" },
//   { label: "Austria" },
//   { label: "Azerbaijan" },
//   { label: "Bahamas" },
//   { label: "Bahrain" },
//   { label: "Bangladesh" },
//   { label: "Barbados" },
//   { label: "Belarus" },
//   { label: "Belgium" },
//   { label: "Belize" },
//   { label: "Benin" },
//   { label: "Bermuda" },
//   { label: "Bhutan" },
//   { label: "Bolivia, Plurinational State of" },
//   { label: "Bonaire, Sint Eustatius and Saba" },
//   { label: "Bosnia and Herzegovina" },
//   { label: "Botswana" },
//   { label: "Bouvet Island" },
//   { label: "Brazil" },
//   { label: "British Indian Ocean Territory" },
//   { label: "Brunei Darussalam" }
// ];

// const suggestions = [
//   { label: "Los Angeles, CA, (LAX - Los Angeles Intl)" },
//   { label: "Houston, TX, (IAH - George Bush Intercontinental/Houston)" },
//   { label: "Ontario, CA, (ONT - Ontario Intl)" },
//   { label: "Houston, TX, (HOU - William P Hobby)" },
//   { label: "Santa Ana, CA, (SNA - John Wayne Airport- Orange County)" },
//   { label: "Phoenix, AZ, (PHX- Phoenix Sky Harbor Intl)" },
//   { label: "Miami, FL, (MIA - Miami Intl)" },
//   { label: "Atlanta, GA, (ATL - Hartsfield-Jackson Atlanta Intl)" },
//   { label: "Chicago, IL, (ORD - Chicago O'Hare Intl)" },
//   { label: "New York, NY, (JFK - John F Kennedy Intl)" },
//   { label: "New York, NY, (LGA - Laguardia Intl)" },
//   { label: "Philadelphia, PA, (PHL - Philadelphia Intl)" },
//   { label: "Salt Lake City, UT, (SLC - Salt Lake City Intl)" },
//   { label: "Seattle, WA, (SEA - Seattle-Tacoma Intl)" },
//   { label: "Newark, NJ, (EWR - Newark Liberty Intl)" },
//   { label: "Dallas-Fort Worth, TX, (DFW - Dallas-Fort Worth Intl)" },
//   { label: "Denver, CO, (DEN - Denver Intl)" },
//   { label: "San Francisco, CA, (SFO - San Francisco Intl)" },
//   { label: "Las Vegas, NV, (LAS - McCarran Intl)" },
//   { label: "Orlando, FL, (MCO - Orlando Intl)" },
//   { label: "Belarus" },
//   { label: "Belgium" },
//   { label: "Belize" },
//   { label: "Benin" },
//   { label: "Bermuda" },
//   { label: "Bhutan" },
//   { label: "Bolivia, Plurinational State of" },
//   { label: "Bonaire, Sint Eustatius and Saba" },
//   { label: "Bosnia and Herzegovina" },
//   { label: "Botswana" },
//   { label: "Bouvet Island" },
//   { label: "Brazil" },
//   { label: "British Indian Ocean Territory" },
//   { label: "Brunei Darussalam" }
// ];

const suggestions = [
  { label: "LAX" },
  { label: "IAH" },
  { label: "ONT" },
  { label: "HOU" },
  { label: "SNA" },
  { label: "PHX" },
  { label: "MIA" },
  { label: "ATL" },
  { label: "ORD" },
  { label: "JFK" },
  { label: "LGA" },
  { label: "PHL" },
  { label: "SLC" },
  { label: "SEA" },
  { label: "EWR" },
  { label: "DFW" },
  { label: "DEN" },
  { label: "SFO" },
  { label: "LAS" },
  { label: "MCO" }
];

console.log(typeof suggestions);

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <FlightLand />
          </InputAdornment>
        ),
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}
// InputProps={{
//   disableUnderline: true,
//  }}
/* DISPLAYS A SUGGESTION THAT MATCHES THE USER INPUT(QUERY), 
WITH THE MATCHED PORTION OF THE SUGGESTION HIGHLIGHTED. */

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span
            key={part.text}
            style={{ fontWeight: part.highlight ? 500 : 400 }}
          >
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}
//GETS THE ARRAY OF SUGGESTIONS BASED ON USER INPUT(VALUE)
function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const useStyles = makeStyles(theme => ({
  root: {
    // height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing(2)
  }
}));

export default function IntegrationAutosuggest() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    single: "",
    popper: ""
  });

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue
    });
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: "react-autosuggest-simple",
          label: "Country",
          placeholder: "Search a country (start with a)",
          value: state.single,
          onChange: handleChange("single")
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
      <div className={classes.divider} />
    </div>
  );
}
