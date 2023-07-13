import React from "react";
import "./Cards.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerCard = () => {
  return (
    <div className="player-card1">
      <button className="player-edit1">
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <div className="player-info1">
        <h3 className="player-name1">Joueur 1</h3>
        <p className="player-price1">9$</p>
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

const FootHpCard = () => {
  return(
    <div className="foot-card">
      <h2 className="foot-label">{/*footLabel - footTime*/}HP - 1H</h2>
      <h2 className="foot-value">{/*nbPers - prix*/} 9 pers - 90$</h2>
    </div>
  )
}

export { PlayerCard, PlayerCard2, PlayerCard3, PayCard, EncaisseCard, FootHpCard };
