import React, { useState } from "react";
import FooterMain from "../../components/Main/Footer/FooterMain";
import Calculator from "../../components/Main/Calculator/Calculator";
import "./PaiementPartiel.css";
import { PaiementCard } from "../../components/Cards/Cards";
import { faCoins, faCreditCard, faTicket, faAddressCard, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { DisableValidateButton, ValidateButton } from "../../components/Buttons/Buttons";

const PaiementPartiel: React.FC = () => {
  const [especesValue, setEspecesValue] = useState("0");
  const [cbValue, setCbValue] = useState("0");
  const [ticketValue, setTicketValue] = useState("0");
  const [carteValue, setCarteValue] = useState("0");
  const [couponValue, setCouponValue] = useState("0");
  const [abonnementValue, setAbonnementValue] = useState("0");
  const [calculatorResult, setCalculatorResult] = useState("0");

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



  const handleEspecesClick = () => {
    setEspecesValue(calculatorResult);
  }

  const handleCbClick = () => {
    setCbValue(calculatorResult);
  }

  const handleTicketClick = () => {
    setTicketValue(calculatorResult);
  }

  const handleCarteClick = () => {
    setCarteValue(calculatorResult);
  }

  const handleCouponClick = () => {
    setCouponValue(calculatorResult);
  }

  const handleAbonnementClick = () => {
    setAbonnementValue(calculatorResult);
  }


  return (
    <div className="main-content">
      <div className="main-header">
        <h1>Paiement</h1>
        <p className="header-reste">Reste à payer:  {/*reste*/} 90$</p>
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
            label="Espèces"
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
            label="Ticket R"
            icon={faTicket}
            value={ticketValue}
            onChange={handleTicketChange}
            onClick={handleTicketClick}
          />
          <PaiementCard
            label="Carte"
            icon={faAddressCard}
            value={carteValue}
            onChange={handleCarteChange}
            onClick={handleCarteClick}
          />
          <PaiementCard
            label="Coupon"
            icon={faReceipt}
            value={couponValue}
            onChange={handleCouponChange}
            onClick={handleCouponClick}
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
      <FooterMain />
    </div>
  );
};

export default PaiementPartiel;