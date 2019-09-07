//adding API queries for app here
// import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// export default {
//     search: function (query) {
//         return axios.get(BASEURL + query + APIKEY);
//     }
// };
import axios from "axios";


//URL and API key for google API
const googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const googleKEY = "AIzaSyCqOAF-sXj7Q5MxZzQTBIDyjHYSfVD_WT0";

//google api query export
export const googleSearch = (queryCity, queryState) => {
        return axios.get(googleURL + queryCity + queryState + "&key=" + googleKEY)
    };

//URL and API key for airportFinder API
const airportFinderURL = "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=50&lng=";
const airportFinderKey = "f60e32620bmsh0545e1c4b416f30p1425cdjsn99e5174ad055";
//airportFinder api query export
export const airportFinderSearch = (long, lat) => {
    //need to structure differently then google as airportFinder call has header which includes api key
    return axios.get(airportFinderURL + long + "&lat=" + lat)

}


