//Card component to hold weather 
import React from "react";
import "./Card.css";


const WeatherCard = props => (
    <div class="card">
    <div class="card-image">
        <img id="weather-img" src={props.img}></img>
        <span class="card-title" id="weather-name"></span>
        <a class="btn-floating halfway-fab waves-effect waves-light red" id="more-weather" value="weather"><i class="material-icons">brightness_5</i></a>
    </div>
    <div class="card-content" id="weather-results">
        <p>Weather</p>

        <table class="striped">
        <thead>
          <tr>
              <th>Date</th>
              <th>Condition</th>
              <th>Temp</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{props.day}</td>
            <td>{props.description}</td>
            <td>{props.temperature} F</td>
          </tr>
          </tbody>

          <thead>
          <tr>
              <th>Wind</th>
              <th>Humidity</th>
          </tr>
        </thead>

          <tbody>
          <tr>
            <td>{props.wind} mph</td>
            <td>{props.humidity}%</td>
          </tr>

        </tbody>
      </table>


    </div>
    <div class="card-action">
        <a href="#"></a>
    </div>
</div>
);
export default WeatherCard;
