import React from "react";
import FooterMain from "./Footer/FooterMain";
import Calculator from "./Calculator/Calculator";
import "./Main.css"


const MainContent: React.FC = () => {
  return (
    <div className="main-content">
        <div className="main-header">
            <h1>Paiement</h1>
            <p className="header-reste">Reste à payer:  {/*reste*/} 90$</p>
        </div>
        <Calculator/>
        <FooterMain/>
    </div>
  );
};

export default MainContent;
