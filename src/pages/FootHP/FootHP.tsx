import React, { useState } from "react";

import "./FootHP.css";
import ActivityBar from "../../components/Main/Bar/ActivityBar";
import FooterMain from "../../components/Main/Footer/FooterMain";


const FootHP: React.FC = () => {
  return (
    <div>
        <div className="foot-content">
            <ActivityBar/>
        </div>
        <div>
            <FooterMain/>
        </div>
        
    </div>
    
    
  );
       
};

export default FootHP;
