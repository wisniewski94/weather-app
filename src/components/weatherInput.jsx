import Joi from "joi-browser";
import React from "react";
import WeatherService from "../services/weatherService";
import "../styles/weatherInput.sass";
import Form from "./common/form";

class WeatherForm extends Form {
  state = {
    data: {
      city: ""
    },
    disabled: { city: false },
    errors: {}
  };
  config = {
    city: Joi.string()
      .required()
      .regex(/^[a-zA-Z\s]+$/)
      .label("City name")
  };

  schema = Joi.object(this.config);

  onMouseOver(event) {
    super.onMouseOver(event);
  }

  doSubmit = async () => {
    const { city: value } = this.state.data;
    const weather = new WeatherService(value, "day");
    const afternoon = new WeatherService(value, "afternoon");
    const night = new WeatherService(value, "night");
    const morning = new WeatherService(value, "morning");
    let data, day, moon, birds, humidity; //when you run out of variable names
    try {
      data = await weather.insert();
      day = await afternoon.showMax("temp");
      moon = await night.showMin("temp");
      birds = await morning.showMean("temp");
      humidity = await weather.showMode("humidity");
      data["day"] = day;
      data["night"] = moon;
      data["morning"] = birds;
      data["humidity"] = humidity;
    } catch (error) {
      const errors = { ...this.state.errors };
      if (error) errors["city"] = error.message;
      else delete errors["city"];
      this.setState({ errors });
    }
    this.props.forecast(data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("city", "City", "Enter city name to view forecast.")}
        {this.renderButton("View")}
      </form>
    );
  }
}

export default WeatherForm;
