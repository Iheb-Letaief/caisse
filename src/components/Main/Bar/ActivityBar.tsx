import React from "react";
import "./Bar.css";

const ActivityBar = () => {
  const activityItems = ["Foot", "Badminton", "Padel", "Squash", "Anniversaire", "Location"];

  return (
    <div className="bar" style={{ backgroundColor: "#5bc0de" }}>
      {activityItems.map((item, index) => (
        <div className="container" key={index}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;
