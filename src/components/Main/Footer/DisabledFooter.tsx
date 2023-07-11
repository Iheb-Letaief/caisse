import React, { useState } from "react";
import "./DisabledFooter.css"


interface DisabledFooterProps {
    /*
  totalRemise: number;
  totalPaye: number;
  resteAPayer: number;
  numberOfClients: number;
  numberOfArticles: number;
  */
}

const DisabledFooter: React.FC<DisabledFooterProps> = ({
    /*
  totalRemise,
  totalPaye,
  resteAPayer,
  numberOfClients,
  numberOfArticles,
  */
}) => {
  return (
    <div className="footerD">
      <div className="containerD total-remiseD">
        <span className="labelD">Total Remise:</span>
        <span className="value">
          {/*totalRemise*/}1$
        </span>
      </div>
      <div className="containerD reste-a-payerD">
        <span className="labelD">Reste à Payer:</span>
        <span className="valueD">
          {/*resteAPayer*/}5$
        </span>
      </div>

      <div className="containerD retour-commandeD">
        <span className="labelD">Retour Commande</span>
      </div>
      
    </div>
  );
};

export default DisabledFooter;
