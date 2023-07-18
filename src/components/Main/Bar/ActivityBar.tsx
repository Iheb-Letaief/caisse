import React, { useState } from "react";
import "./Bar.css";
import { FootHpCard } from "../../Cards/Cards";

const ActivityBar = () => {
  const activityItems = ["Foot", "Badminton", "Padel", "Squash", "Anniversaire", "Location"];
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleActivitySelection = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="bar">
      {activityItems.map((item, index) => (
        <div className="container" key={index} onClick={() => handleActivitySelection(item)}>
          <span>{item}</span>
        </div>
      ))}
      <div className="bar-card">
        {selectedActivity && <FootHpCard/> }
      </div>
      
    </div>
  );
};

export default ActivityBar;
