//Card component to hold weather 

import React from "react";
import "./Card.css";




//import MaterialTable from "material-table";


const WeatherCard = props => (
    <div className="card">
    <div className="card-image">
        <img id="weather-img" src={props.img} alt=""></img>
        <span className="card-title" id="weather-name"></span>
        <a className="btn-floating halfway-fab waves-effect waves-light red" id="more-weather" value="weather"><i className="material-icons">brightness_5</i></a>
    </div>
    <div className="card-content" id="weather-results">
        <p>Weather</p>

        <table className="striped">
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
    <div className="card-action">
        <a href="#"></a>
    </div>
</div>
);

export default WeatherCard;
