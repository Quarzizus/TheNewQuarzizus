import React from "react";
import "../styles/components/Loader.scss";

const Loader = () => {
  return (
    <svg className="Spinner">
      <circle cx="70" cy="70" r="70"></circle>
    </svg>
  );
};

export default Loader;
