import React from "react";
import "./Buttons.css";
import { faCreditCard, faFileInvoice, faHourglass, faCoins, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ValidateButton = () => {
  return (
    <button className="validate-btn" >
      Valider
    </button>
  );
};

export const DisableValidateButton = () => {
  return (
    <button className="validate-btnD" >
      Valider
    </button>
  );
};

export const PaymentButton = () => {
  return(
    <button className="pay-btn">
      Payer<FontAwesomeIcon icon={faCreditCard} />
    </button>
  )
}

export const PlusMinusButton = () => {
  return(
    <div className="pm-btn">
      <button className="pls-btn">
        +
      </button>
      <div className="pm-line"/>
      <button className="min-btn">
        -
      </button>
    </div>
  )
}

export const SoldeButton = () => {
  return(
    <button className="solde-btn" >
      Solde
    </button>
  )
} 

export const RemiseButton = () => {
  return(
    <button className="window-btn">
      Remise<FontAwesomeIcon icon={faFileInvoice} size="xl" />
    </button>
  )
}

export const AttenteButton = () => {
  return(
    <button className="window-btn">
      Attente<FontAwesomeIcon icon={faHourglass} size="xl" />
    </button>
  )
}

export const EncaisserButton = () => {
  return(
    <button className="encaisser-btn">
      Encaisser
    </button>
  )
}

export const DangerEncaisserButton = () => {
  return(
    <button className="encaisser-btn-danger">
      Encaisser
    </button>
  )
}

export const EspButton = () => {
  return(
    <button className="window-btn2">
      <div className="label-window-btn">Esp</div><FontAwesomeIcon icon={faCoins} size="xl" />
    </button>
  )
}

export const CbButton = () => {
  return(
    <button className="window-btn2">
      <div className="label-window-btn">CB</div><FontAwesomeIcon icon={faCreditCard} size="xl" />
    </button>
  )
}

export const AutreButton = () => {
  return(
    <button className="window-btn2">
      <div className="label-window-btn">Autre</div><FontAwesomeIcon icon={faRotate} size="xl" />
    </button>
  )
}

export const CloseButton = () => {
  return(
    <button className="close-btn">
      <FontAwesomeIcon icon={faXmark} size="xs" />
    </button>
  )
}




