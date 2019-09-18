import React, { Component } from "react";
import "./Card.css";
import WeatherCard from "./WeatherCard";
import { weatherSearch } from "../../utils/API";
import MaterialTable from "material-table";
class WeatherCardContainer extends Component {
    state = {
        result: [],
        submit: "",
        isLoaded: false,
        error: null
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
        console.log(this.state.result[1].weather[0].description);

        return <p>"testing"</p>
      }





      // if (this.state.loaded = false,
      //   console.log("Loading")
      // );
      // else 
      
      //   return  <WeatherCard
      //  //   day = {monthDay + " " + time  }
      //     description={this.state.result.weather.description}
      //     temperature={this.state.result.main.temp}
      //     wind={this.state.result.wind.speed}
      //     humidity={this.state.result.main.humidity}
      //     img={this.state.result}
      //     >

      //   </WeatherCard>;

        
      };
    }
;
    

export default WeatherCardContainer;
