import React from "react";
import { Link } from "react-router-dom";
import "../styles/logo.sass";

const Logo = () => {
  return (
    <Link to="/" id="logo">
      W.W.WeatherApp
    </Link>
  );
};

export default Logo;
