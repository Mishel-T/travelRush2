//Card component to hold weather 
import React from "react";
import "./Card.css";
import MaterialTable from "material-table";

const WeatherCard = props => (
    <div class="card">
    <div class="card-image">
        <img id="weather-img" src={props.img}></img>
        <span class="card-title" id="weather-name"></span>
        <a class="btn-floating halfway-fab waves-effect waves-light red" id="more-weather" value="weather"><i class="material-icons">brightness_5</i></a>
    </div>
    <div class="card-content" id="weather-results">
        <p>Weather</p>
        <div style={{ maxWidth: "200%" }}>
       
        </div>
        <p>{props.description}</p>
        <p>{props.icon}</p>
        <p>{props.temperature} F</p>
        <p>{props.day}</p>
        <p>{props.wind} mph</p>
        <p>{props.humidity}%</p>
    </div>
    <div class="card-action">
        <a href="#"></a>
    </div>
</div>
);
export default WeatherCard;


{/* <MaterialTable
columns={[
  { title: "Day", field: "date" },
  { title: "Description", field: "description" },
  { title: "Temperature", field: "temperature", type: "numeric" },
  { title: "Wind",field: "wind", type: "numeric"},
  { title: "Humidity", field: "humidity", type: "percentage" },
]}
data={[
  { date: "day", description: "description", temperature: "temperature", wind: "wind", humidity: "humidity" }
]}
title="Forecast"
/> */}


