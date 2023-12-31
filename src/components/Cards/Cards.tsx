import React, { ChangeEvent, useState } from "react";
import "./Cards.css";
import { IconDefinition, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { stringify } from "querystring";

interface PlayerProps{
  name: string;
  price: number;
}

const PlayerCard: React.FC<PlayerProps> = ({name, price}) => {
  return (
    <div className="player-card1">
      <button className="player-edit1">
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <div className="player-info1">
        <h3 className="player-name1">{name}</h3>
        <p className="player-price1">{price}$</p>
      </div>
    </div>
  );
};

const PlayerCard2 = () => {
  return (
    <div className="player-card2">
      <button className="player-edit2">
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <div className="player-info2">
        <h2 className="player-name2">Joueur 2</h2>
        <p className="player-price2">9$</p>
      </div>
    </div>
  );
};

const PlayerCard3 = () => {
  return (
    <div className="player-card3">
      <button className="player-edit3">
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <div className="player-info3">
        <h2 className="player-name3">Joueur 3</h2>
        <p className="player-price3">9$</p>
      </div>
    </div>
  );
};

const PayCard = () => {
  return(
    <div className="pay-card">
      Payé
    </div>
  )
}

const EncaisseCard = () => {
  return(
    <div className="encaisse-card">
      Encaissé
    </div>
  )
}

interface FootHpCardProps {
  footLabel: string;
  footTime: string;
  nbPers: number;
  prix: number;
}

const FootHpCard: React.FC<FootHpCardProps> = ({ footLabel, footTime, nbPers, prix }) => {
  return (
    <div className="foot-card">
      <h2 className="foot-label">{footLabel} - {footTime}</h2>
      <h2 className="foot-value">{nbPers} pers - {prix}$</h2>
    </div>
  );
};

interface CardProps {
  label: string;
  icon: IconDefinition;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

const PaiementCard: React.FC<CardProps> = ({ label, icon, value, onChange, onClick }) => {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }; 

  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    console.log(value);
  };

  return (
    <div className="paiement-card">
      <input type="text" value={value} onChange={handleInputChange} className="paiement-card-input"/>
      <button className="label-icon" onClick={onClick}>
        <div className="paiement-card-label">{label}</div>
        <div className="paiement-card-icon"><FontAwesomeIcon icon={icon} /></div>
      </button>
      
    </div>
  );
};

export { PlayerCard, PlayerCard2, PlayerCard3, PayCard, EncaisseCard, FootHpCard, PaiementCard};