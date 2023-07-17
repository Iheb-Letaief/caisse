import React, { useState } from "react";
import FooterMain from "../../components/Main/Footer/FooterMain";
import Calculator from "../../components/Main/Calculator/Calculator";
import "./PaiementPartiel.css"
import { PaiementCard } from "../../components/Cards/Cards";
import { faCoins, faCreditCard, faTicket, faAddressCard, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { DisableValidateButton } from "../../components/Buttons/Buttons";


const PaiementPartiel: React.FC = () => {

    const [activity, setActivity] = useState("");
  
    const handleActivityChange = (value: string) => {
      setActivity(value);
    };


  return (
    <div className="main-content">
        <div className="main-header">
            <h1>Paiement</h1>
            <p className="header-reste">Reste à payer:  {/*reste*/} 90$</p>
        </div>
        <div className="content-container">
          <div className="left-section">
            <Calculator/>
            <div className="main-total-container">Total {/*total*/} 0$</div>
            <div className="main-validate-btn"><DisableValidateButton/></div>
          </div>
          
          <div className="cards-container">
            <PaiementCard label="Espèces" icon={faCoins} value={activity} onChange={handleActivityChange} />
            <PaiementCard label="CB" icon={faCreditCard} value={activity} onChange={handleActivityChange} />
            <PaiementCard label="Ticket R" icon={faTicket} value={activity} onChange={handleActivityChange} />
            <PaiementCard label="Carte" icon={faAddressCard} value={activity} onChange={handleActivityChange} />
            <PaiementCard label="Coupon" icon={faReceipt} value={activity} onChange={handleActivityChange} />
            <PaiementCard label="Abonnement" icon={faCoins} value={activity} onChange={handleActivityChange} />
          </div>
        </div>
        <FooterMain/>
    </div>
  );
};

export default PaiementPartiel;
