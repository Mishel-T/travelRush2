import React, { Component } from "react";
import CollectionCard from "./collectionCard"
import { yelpSearch } from "../../../utils/API";

class CollectionContainer extends Component {
    state = {
        responsedetail1: [],
        responsedetail2: [],
        responsedetail3: []
        //search: ""
    };


    componentDidUpdate() {
        if (this.props.parentState && !this.state.search) {
            const { searchContainInput } = this.props.parentState;
            this.setState(
                { search: this.props.parentState }, () => { this.updateCollection() }

            );

        }
    }
    updateCollection = search => {
        var call1 = yelpSearch('hotels', this.state.search.coordLoc.long, this.state.search.coordLoc.lat);
        var call2 = yelpSearch('restaurants', this.state.search.coordLoc.long, this.state.search.coordLoc.lat);
        var call3 = yelpSearch('coffee', this.state.search.coordLoc.long, this.state.search.coordLoc.lat);

        (call3).then(response3 => {
            //console.log(response3.data);

            this.setState({ responsedetail3: response3.data.businesses })

        });

        (call2).then(response2 => {
            //console.log(response2.data);

            this.setState({ responsedetail2: response2.data.businesses })

        });

        (call1).then(response1 => {
            console.log(response1.data);

            this.setState({ responsedetail1: response1.data.businesses })

        });
    }


    render() {
        console.log(this.state.responsedetail3)
        return [
            <div className="card" >
                <div className="collection">

                    {this.state.responsedetail2.map((businesses, index) => (
                        <CollectionCard key={index}
                            urlplaceholder={businesses.url}
                            name={businesses.name}
                            price={businesses.price}
                            distance={Math.round((businesses.distance * 0.000621371192) * 10) / 10}
                        >
                        </CollectionCard>
                    ))}

                </div>
            </div>,

            <div className="card" >
                <div className="collection">
                    {this.state.responsedetail3.map((businesses, index) => (
                        <CollectionCard key={index}
                            urlplaceholder={businesses.url}
                            name={businesses.name}
                            price={businesses.price}
                            distance={Math.round((businesses.distance * 0.000621371192) * 10) / 10}
                        >
                        </CollectionCard>
                    ))}
                </div>
            </div>,

            <div className="card" >
                <div className="collection">

                    {this.state.responsedetail1.map((businesses, index) => (
                        <CollectionCard key={index}
                            urlplaceholder={businesses.url}
                            name={businesses.name}
                            price={businesses.price}
                            distance={Math.round((businesses.distance * 0.000621371192) * 10) / 10}
                        >
                        </CollectionCard>
                    ))}

                </div>
            </div>

        ]
    }
}

export default CollectionContainer;

