import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.sass";

const NotFound = () => {
  return (
    <div>
      <p className="notFound">
        <h1>404</h1>
        The page you are looking for doesn't exist. Please go back to the
        <Link to="/">homepage.</Link>
      </p>
    </div>
  );
};

export default NotFound;
