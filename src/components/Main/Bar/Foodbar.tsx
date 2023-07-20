import React from "react";
import "./Bar.css";

const Foodbar = () => {
  const foodItems = ["Soda", "Biere", "Eaux / Sirop", "Cafe / The"];

  return (
    <div className="bar">
      {foodItems.map((item, index) => (
        <div className="container" key={index}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Foodbar;
