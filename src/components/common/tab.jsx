import React from "react";
import "../../styles/tab.sass";

const Tab = ({ className, children, ...rest }) => {
  return (
    <article {...rest} className={`${className || ""} tab`}>
      {children}
    </article>
  );
};

export default Tab;
