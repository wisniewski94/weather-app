import _ from "lodash";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class WeatherStats extends Component {
  constructor(props) {
    super(props);
    const categories = _.chain(props.forecast)
      .map(element => {
        const date = new Date(element.dt * 1000);
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const hour = ("0" + date.getUTCHours()).slice(-2);
        const minute = ("0" + date.getUTCMinutes()).slice(-2);
        return day + "." + month + " " + hour + ":" + minute;
      })
      .value();
    const temperature = _.chain(props.forecast)
      .map(element => element.main.temp)
      .value();
    const humidity = _.chain(props.forecast)
      .map(element => element.main.humidity)
      .value();
    this.state = {
      options: {
        xaxis: {
          categories
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["#056cff", "#ffc82e"]
      },
      series: [
        {
          name: "Temperature",
          data: temperature
        },
        {
          name: "Humidity",
          data: humidity
        }
      ]
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
        height="400px"
      />
    );
  }
}

export default WeatherStats;
