import React, { Component } from "react";
import Heading from "./common/heading";
import Tab from "./common/tab";
import WeatherForm from "./weatherInput";
import WeatherStats from "./weatherStats";
import WeatherTab from "./weatherTab";

class Weather extends Component {
  state = { forecast: [] };

  handleSubmit = value => {
    if (value === undefined) {
      value = [];
    }
    const { city, day, night, morning, humidity } = value;
    this.setState({
      forecast: value.temp,
      city,
      day,
      night,
      morning,
      humidity
    });
  };

  render() {
    const { forecast } = this.state;
    let info = false;
    if (forecast !== undefined && forecast.length > 0) {
      info = this.state;
    }
    return (
      <React.Fragment>
        <WeatherForm forecast={this.handleSubmit}></WeatherForm>
        {info && (
          <React.Fragment>
            <Heading className="heading">Forecast</Heading>
            <div className="grid">
              <Tab>
                <WeatherTab temp={info.forecast[0]} info={info}></WeatherTab>
              </Tab>
              <Tab>
                <WeatherTab temp={info.forecast[1]}></WeatherTab>
              </Tab>
              <Tab>
                <WeatherTab temp={info.forecast[2]}></WeatherTab>
              </Tab>
              <Tab>
                <WeatherTab temp={info.forecast[3]}></WeatherTab>
              </Tab>
              <Tab>
                <WeatherTab temp={info.forecast[4]}></WeatherTab>
              </Tab>
            </div>
          </React.Fragment>
        )}
        {info && (
          <React.Fragment>
            <Heading className="heading">Statistics</Heading>
            <WeatherStats forecast={this.state.forecast}></WeatherStats>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Weather;
