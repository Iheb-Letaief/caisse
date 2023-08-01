import React, { useState } from "react";
import FooterMain from "../../components/Main/Footer/FooterMain";
import Calculator from "../../components/Main/Calculator/Calculator";
import "./PaiementPartiel.css";
import { PaiementCard } from "../../components/Cards/Cards";
import { faCoins, faCreditCard, faTicket, faAddressCard, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { DisableValidateButton, ValidateButton } from "../../components/Buttons/Buttons";
import Footer from "../../components/Main/Footer/Footer";

const Remise: React.FC = () => {
  const [especesValue, setEspecesValue] = useState("");
  const [cbValue, setCbValue] = useState("");
  const [carteValue, setCarteValue] = useState("");
  const [abonnementValue, setAbonnementValue] = useState("");
  const [calculatorResult, setCalculatorResult] = useState("0");


  const [soldeButtonClicked, setSoldeButtonClicked] = useState(false);

  const handleEspecesChange = (value: string) => {
    setEspecesValue(value);
  };

  const handleCbChange = (value: string) => {
    setCbValue(value);
  };
 
  const handleCarteChange = (value: string) => {
    setCarteValue(value);
  };

  const handleAbonnementChange = (value: string) => {
    setAbonnementValue(value);
  };

  const handleSoldeButtonClick = () => {
    setSoldeButtonClicked(true);
  };

 

  const handleEspecesClick = () => {
    setEspecesValue(calculatorResult);
  }

  const handleCbClick = () => {
    setCbValue(calculatorResult);
  }

  const handleCarteClick = () => {
    setCarteValue(calculatorResult);
  }

  const handleAbonnementClick = () => {
    setAbonnementValue(calculatorResult);
  }

  

  return (
    <div className="main-content">
      <div className="main-header">
        <h1>Remise</h1>
      </div>
      <div className="content-container">
        <div className="left-section">
          <Calculator onSoldeButtonClick={handleSoldeButtonClick} onResultChange={(result) => setCalculatorResult(result)} />
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
            onClick={handleEspecesClick}
          />
          <PaiementCard
            label="CB"
            icon={faCreditCard}
            value={cbValue}
            onChange={handleCbChange}
            onClick={handleCbClick}
          />
          
          <PaiementCard
            label="Etudiant"
            icon={faAddressCard}
            value={carteValue}
            onChange={handleCarteChange}
            onClick={handleCarteClick}
          />
          
          <PaiementCard
            label="Abonnement"
            icon={faCoins}
            value={abonnementValue}
            onChange={handleAbonnementChange}
            onClick={handleAbonnementClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Remise;