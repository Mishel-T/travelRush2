import React, { Component } from "react";
import "./Card.css";
import WeatherCard from "./WeatherCard";
import { weatherSearch } from "../../utils/API";
import MaterialTable from "material-table";
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
   //     const monthDay = moment(listWeather[indicesWeather[j]].dt_txt).format("ddd MMM D");
   //     const time = moment(listWeather[indicesWeather[j]].dt_txt).format("h:mm A");
  //       var listWeather = response.list;
  //       console.log("Departure date is " + departDate);
  //       console.log("Departure date is of type " + typeof(departDate));
  //       //reference to the travel date
  //       convDateDay = processUserDate(departDate, "12:00");
  //       convDateNight = processUserDate(departDate, "21:00");
  //       //Get the indices of the target weather times for each day.
  //       var indicesWeather = [];
  //       for (var i = 0; i < listWeather.length; i++) {
  //           console.log(listWeather[i].dt_txt);
  //           console.log("The time in API is : " + listWeather[i].dt_txt);
  //           console.log("The target day time is: " + convDateDay);
  //           console.log("The target night time is: " + convDateNight);
  //           if (listWeather[i].dt_txt === convDateDay || listWeather[i].dt_txt === convDateNight) {
  //               console.log("found it!");
  //               indicesWeather.push(i);
  //               if (indicesWeather.length === 2) {
  //                   //exit loop if we have enough indices for weather forecast on travel date.
  //                   break
  //               }
  //           }
  //       const monthDay = moment(listWeather[indicesWeather[j]].dt_txt).format("ddd MMM D");
  //       const time = moment(listWeather[indicesWeather[j]].dt_txt).format("h:mm A");
  //       this.setState({
  //           [name]: value
  //       })

  //   }
}
  

    render() {
        return <WeatherCardContainer
       //   day = {monthDay + " " + time  }
          description={this.state.result.weather.description}
          temperature={this.state.result.main.temp}
          wind={this.state.result.wind.speed}
          humidity={this.state.result.main.humidity}
          >
              <div style={{ maxWidth: "100%" }}>
        <MaterialTable
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
          title="Weather Forecast"
        />
      </div>

        </WeatherCardContainer>
        
    };
};

export default WeatherCardContainer;
