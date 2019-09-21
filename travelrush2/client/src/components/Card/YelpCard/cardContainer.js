//container to render the first Card component once the api call is made to display the 0 index card
//container needs to be loaded on searchForm click event - need to pull latitude and longitude from searchForm
import React, { Component } from "react";
import Card from "./Card";
import { yelpSearch } from "../../../utils/API";


class CardContainer extends Component {
    state = {
        response1: {},
        response2: {},
        response3: {},
        //search: ""
    };


    // When this component mounts, search the Yelp API for the corresponding card
    //replace current long/lat with long/lat from Dupe's SearchForm component
    componentDidMount() {
        var call1 = yelpSearch('hotels', "-87.904724", "41.978611");
        var call2 = yelpSearch('restaurants', "-87.904724", "41.978611");
        var call3 = yelpSearch('coffee', "-87.904724", "41.978611");
        //how to run all at the same time in instead of having to run one at a time - this way only runs the last one
        (call3).then(response3 => {
            //console.log(response3.data);

            var coffeeInfo = {
                name: response3.data.businesses[0].name,
                image: response3.data.businesses[0].image_url,
                url: response3.data.businesses[0].url,
                price: response3.data.businesses[0].price,
                rating: response3.data.businesses[0].rating,
                title: response3.data.businesses[0].categories[0].title,
            }
            //console.log(coffeeInfo)
            this.setState({ response3: coffeeInfo })
        });

        call1.then(response1 => {
            //console.log(response1.data);

            var hotelsInfo = {
                name: response1.data.businesses[0].name,
                image: response1.data.businesses[0].image_url,
                url: response1.data.businesses[0].url,
                price: response1.data.businesses[0].price,
                rating: response1.data.businesses[0].rating,
                title: response1.data.businesses[0].categories[0].title,
            }
            //console.log(hotelsInfo)
            this.setState({ response1: hotelsInfo })
        })

        call2.then(response2 => {
            console.log(response2.data);

            var restaurantsInfo = {
                name: response2.data.businesses[0].name,
                image: response2.data.businesses[0].image_url,
                url: response2.data.businesses[0].url,
                price: response2.data.businesses[0].price,
                rating: response2.data.businesses[0].rating,
                title: response2.data.businesses[0].categories[0].title,
            }
            console.log(restaurantsInfo)
            this.setState({ response2: restaurantsInfo })

        })


    }
    // yelpSearchSubmit = query => {
    //     yelpSearch(query)
    //         .then(res => this.setState({ result: res.data }))
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     })
    // }


    render() {
        return [
            

            <Card
                name={this.state.response2.title}
                img="restaurant-img" imgsrc={this.state.response2.image}
                cardTitle="restaurant-name"
                nameEntry={this.state.response2.name}
                value="restaurants"
                btnName="restaurant"
                contentID="restaurant-info"
                title="restaurant-title"
                rating="restaurant-rating"
                ratingEntry={this.state.response2.rating}
                price="restaurant-price"
                priceEntry={this.state.response2.price}
                url="restaurant-url"
                urlEntry={this.state.response2.url}>
            </Card>,

            <Card name={this.state.response3.title}
                img="coffee-img" imgsrc={this.state.response3.image}
                cardTitle="coffee-name"
                nameEntry={this.state.response3.name}
                value="coffee"
                btnName="free_breakfast"
                contentID="coffee-info"
                title="coffee-title"
                rating="coffee-rating"
                ratingEntry={this.state.response3.rating}
                price="coffee-price"
                priceEntry={this.state.response3.price}
                url="coffee-url"
                urlEntry={this.state.response3.url}>

            </Card>,

            <Card name={this.state.response1.title}
                img="hotel-img" imgsrc={this.state.response1.image}
                cardTitle="hotel-name"
                nameEntry={this.state.response1.name}
                value="hotels"
                btnName="hotel"
                contentID="hotel-info"
                title="hotel-title"
                rating="hotel-rating"
                ratingEntry={this.state.response1.rating}
                price="hotel-price"
                priceEntry={this.state.response1.price}
                url="hotel-url"
                urlEntry={this.state.response1.url}>
                >
        </Card>];
    }

}
export default CardContainer;

