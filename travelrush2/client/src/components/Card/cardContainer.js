//container to render the Card component once the api call is made
import React, { Component } from "react";
import Card from "./Card";
import { yelpSearch } from "../../utils/API";


class CardContainer extends Component {
    state = {
        result: {},
        search: ""
    };
    // When this component mounts, search the Yelp API the corresponding card
    componentDidMount() {
        yelpSearch("-87.904724", "41.978611").then(response => {
            console.log(response.data);
        });
    }
    yelpSearchSubmit = query => {
        yelpSearch(query)
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
        return (<Card name='Restaurants' img="restaurant-img" cardTitle="restaurant-name" value="restaurants" btnName="restaurant" contentID="restaurant-info" title="restaurant-title" rating="restaurant-rating" price="restaurant-price" url="restaurant-url"></Card>)
    }

}
export default CardContainer;

