import React, { Component } from "react";
import "./Card.css";
import WeatherCard from "./WeatherCard";
import { weatherSearch } from "../../utils/API";
class WeatherCardContainer extends Component {
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
        return <WeatherCardContainer>

        </WeatherCardContainer>
    }
}
export default WeatherCard;

