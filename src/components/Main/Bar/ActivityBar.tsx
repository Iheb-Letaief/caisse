import React, { useState } from "react";
import "./Bar.css";
import { FootHpCard } from "../../Cards/Cards";

interface ActivityItem {
  name: string;
  footLabel: string;
  footTime: string;
  nbPers: number;
  prix: number;
}

const ActivityBar = () => {
  const activityItems = ["Foot", "Badminton", "Padel", "Squash", "Anniversaire", "Location"];
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleActivitySelection = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="activity-bar">
      <div className="bar">
        {activityItems.map((item, index) => (
          <div className="container" key={index} onClick={() => handleActivitySelection(item)}>
            <span>{item}</span>
      </div>
        ))}
      </div>
      <div className="bar-card">
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H" nbPers={9} prix={90}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H" nbPers={9} prix={90}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H30" nbPers={9} prix={135}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H30" nbPers={11} prix={135}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="2H" nbPers={9} prix={180}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="2H" nbPers={11} prix={180}/>}
      </div>
      <div className="bar-card">
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H" nbPers={10} prix={90}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H" nbPers={12} prix={90}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H30" nbPers={10} prix={135}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="1H30" nbPers={12} prix={135}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="2H" nbPers={10} prix={180}/>}
        {selectedActivity && <FootHpCard footLabel="HP" footTime="2H" nbPers={12} prix={180}/>}
      </div>
    </div>
    
  );
};

export default ActivityBar;
