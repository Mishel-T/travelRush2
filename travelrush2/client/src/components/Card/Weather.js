import React, { Component } from "react";
import "./Card.css";
import { weatherSearch } from "../../utils/API";
class WeatherCard extends Component {
    state = {
        result: {},
        submit: ""
    };
    componentDidMount() {
        weatherSearch("-87.904724", "41.978611").then(response => {
            console.log(response.data);
        });
    }
    weatherSearchSubmit = query => {
        weatherSearch(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        return <div class="card">
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
    }
}
export default WeatherCard;

