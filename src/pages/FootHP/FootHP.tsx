import React, { useState } from "react";

import "./FootHP.css";
import ActivityBar from "../../components/Main/Bar/ActivityBar";
import FooterMain from "../../components/Main/Footer/FooterMain";
import Footer from "../../components/Main/Footer/Footer";


const FootHP: React.FC = () => {
  return (
    <div>
        <div className="foot-content">
            <ActivityBar/>
        </div>
        <div>
            <Footer/>
        </div>
        
    </div>
    
    
  );
       
};

export default FootHP;
