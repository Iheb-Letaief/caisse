import React from "react";
import "./Bar.css";

const MenuBar = () => {
  const menuItems = ["Menu Burger", "Menuu salade"];

  return (
    <div className="bar" style={{ backgroundColor: "#5bc0de" }}>
      {menuItems.map((item, index) => (
        <div className="container" key={index}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
