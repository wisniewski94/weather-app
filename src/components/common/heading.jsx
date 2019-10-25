import React from "react";

const Heading = ({ className, children, ...rest }) => {
  return (
    <h1 {...rest} className={`${className || ""}`}>
      {children}
    </h1>
  );
};

export default Heading;
