import React from "react";
import "./Bar.css";

const SnackBar = () => {
  const snackItems = ["Chips", "Confiserie", "Snack"];

  return (
    <div className="bar" style={{ backgroundColor: "#5bc0de" }}>
      {snackItems.map((item, index) => (
        <div className="container" key={index}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default SnackBar;
