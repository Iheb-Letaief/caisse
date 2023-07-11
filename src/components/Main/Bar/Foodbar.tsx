import React from "react";
import "./Bar.css";

const Foodbar = () => {
  const foodItems = ["Soda", "Anniversaire", "Eaux / Sirop", "Cafe / The"];

  return (
    <div className="bar" style={{ backgroundColor: "#5bc0de" }}>
      {foodItems.map((item, index) => (
        <div className="container" key={index}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Foodbar;
