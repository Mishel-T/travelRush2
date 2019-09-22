import React, { Component } from "react";
import "./Card.css";
import WeatherCard from "./WeatherCard";
import { weatherSearch } from "../../utils/API";


class WeatherCardContainer extends Component {
    state = {
        result: [],
        submit: "",
        isLoaded: false,
        error: null,
   
    };
  

  
    componentDidMount() {
        weatherSearch("-87.904724", "41.978611").then(response => {
            console.log(response.data);
            this.setState({ isLoaded: true, 
                            result: response.data.list});
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
            
          });

        }
      )
        
      }
  
    render() {
      const {error, isLoaded, result} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        if (this.state.result.length > 0)




        return (
        <div>
       
        <WeatherCard
                  day={this.state.result[1].dt_txt}
                  description={this.state.result[1].weather[0].description}
                  icon={this.state.result[1].weather[0].icon}
                  temperature={this.state.result[1].main.temp}
                  wind={this.state.result[1].wind.speed}
                  humidity={this.state.result[1].main.humidity}
                  >

                  </WeatherCard>
                  </div>)




      }
    }

    
        
      };
    
;


export default WeatherCardContainer; 


//        if (this.state.result.length > 0)
//console.log(this.state.result[1].weather[0].description);
