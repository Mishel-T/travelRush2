import React from "react";
import "./Card.css";
//creating jsx to display the card image and name
const WeatherCard = props => (
    <div class="card">
        <div class="card-image">
            <img id="weather-img"></img>
            <span class="card-title" id="weather-name"></span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" id="more-weather" value="weather"><i class="material-icons">brightness_5</i></a>
        </div>
        <div class="card-content" id="weather-results">
            <p>Weather</p>
        </div>
        <div class="card-action">
            <a href="#"></a>
        </div>
    </div>
);
export default WeatherCard;

