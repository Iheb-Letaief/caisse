import React, { useState } from "react";
import FooterMain from "../../components/Main/Footer/FooterMain";
import Calculator from "../../components/Main/Calculator/Calculator";
import "./PaiementPartiel.css";
import { PaiementCard } from "../../components/Cards/Cards";
import { faCoins, faCreditCard, faTicket, faAddressCard, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { DisableValidateButton, ValidateButton } from "../../components/Buttons/Buttons";

const Remise: React.FC = () => {
  const [especesValue, setEspecesValue] = useState("");
  const [cbValue, setCbValue] = useState("");
  const [ticketValue, setTicketValue] = useState("");
  const [carteValue, setCarteValue] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [abonnementValue, setAbonnementValue] = useState("");

  const [soldeButtonClicked, setSoldeButtonClicked] = useState(false);

  const handleEspecesChange = (value: string) => {
    setEspecesValue(value);
  };

  const handleCbChange = (value: string) => {
    setCbValue(value);
  };

  const handleTicketChange = (value: string) => {
    setTicketValue(value);
  };

  const handleCarteChange = (value: string) => {
    setCarteValue(value);
  };

  const handleCouponChange = (value: string) => {
    setCouponValue(value);
  };

  const handleAbonnementChange = (value: string) => {
    setAbonnementValue(value);
  };

  const handleSoldeButtonClick = () => {
    setSoldeButtonClicked(true);
  };


  return (
    <div className="main-content">
      <div className="main-header">
        <h1>Remise</h1>
      </div>
      <div className="content-container">
        <div className="left-section">
          <Calculator onSoldeButtonClick={handleSoldeButtonClick} />
          <div className="main-total-container">Total {/*total*/} 0$</div>
          {soldeButtonClicked ? (
            <div className="main-validate-btn">
              <ValidateButton />
            </div>
            
          ) : (
            <div className="main-validate-btn">
              <DisableValidateButton />
            </div>
            
          )}
        </div>

        <div className="cards-container">
          <PaiementCard
            label="Montant"
            icon={faCoins}
            value={especesValue}
            onChange={handleEspecesChange}
          />
          <PaiementCard
            label="CB"
            icon={faCreditCard}
            value={cbValue}
            onChange={handleCbChange}
          />
          
          <PaiementCard
            label="Etudiant"
            icon={faAddressCard}
            value={carteValue}
            onChange={handleCarteChange}
          />
          
          <PaiementCard
            label="Abonnement"
            icon={faCoins}
            value={abonnementValue}
            onChange={handleAbonnementChange}
          />
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Remise;
