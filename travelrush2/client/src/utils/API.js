//adding API queries for app here
import axios from "axios";

//URL and API key for google API
const googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const googleKEY = "AIzaSyCqOAF-sXj7Q5MxZzQTBIDyjHYSfVD_WT0";

//google api query export
export const googleSearch = formattedAddress => {
  return axios.get(googleURL + formattedAddress + "&key=" + googleKEY);
};

//URL and API key for airportFinder API
const airportFinderURL =
  "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=50&lng=";
const config = {
  headers: {
    "X-RapidAPI-Host": "cometari-airportsfinder-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "f60e32620bmsh0545e1c4b416f30p1425cdjsn99e5174ad055"
  }
};

//airportFinder api query export
//note to Dupe - had to change the placeholders for longitude and latitude from coordLoc.long and coordLoc.lat to just long and lat, so coordLoc.long and coordLoc.lat will have to have to be saved in long and lat vars
export const airportFinderSearch = (long, lat) => {
  return axios.get(airportFinderURL + long + "&lat=" + lat, config);
};

//URL and API key for yelp API
const yelpURL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=";
const yelpAPIKey =
  "NNn_iZkgwcsoXyb1LwNcwgRAiCL8c3RkazAkRcQueV0e5b0lZNV-SGGIeosL3AiABzN0_PsQasfbyA8BkbNTjHr-RiTH3sKFAPyB8SCmQInth1SBzlW1uhiuBsr5XHYx";
const configYelp = {
  headers: {
    Authorization: "Bearer " + yelpAPIKey
  }
};

export const yelpSearch = (term, long, lat) => {
  return axios.get(
    yelpURL + term + "&latitude=" + lat + "&longitude=" + long + "&limit=10",
    configYelp
  );
};

//URL and API key for openweathermap API
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=";
const weatherAPIKey = "61fb0fbf5b4af7a73cbae239fe1b3fbf";

export const weatherSearch = (long, lat) => {
  return axios.get(
    weatherURL +
      lat +
      "&lon=" +
      long +
      "&units=imperial&mode=json&appid=" +
      weatherAPIKey
  );
};

// Gets all airports list that will be used for the autocomplete. NOT WORKING YET!!!
export const airportsList = () => {
  return axios.get("/api/airport");
};

//SERVER IS ON 3001 BUT REACT APP IS IN 3000????
