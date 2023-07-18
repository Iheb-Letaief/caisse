import React from "react";
import "./Footer.css";

interface FooterProps {
    /*
  totalRemise: number;
  totalPaye: number;
  resteAPayer: number;
  numberOfClients: number;
  numberOfArticles: number;
  */
}

const Footer: React.FC<FooterProps> = ({
    /*
  totalRemise,
  totalPaye,
  resteAPayer,
  numberOfClients,
  numberOfArticles,
  */

  
}) => {

  return (
    <div className="footer">
      <div className="footer-container total-remise">
        <span className="label">Total Remise:</span>
        <span className="value">
          {/*totalRemise*/}1$
        </span>
      </div>
      <div className="footer-container total-paye">
        <span className="label">Total Payé:</span>
        <span className="value">
          {/*totalPaye*/}70$
        </span>
      </div>
      <div className="footer-container reste-a-payer">
        <span className="label">Reste à Payer:</span>
        <span className="value">
          {/*resteAPayer*/}5$
        </span>
      </div>
      <div className="footer-container">
        <span className="label">Clients:</span>
        <span className="value">{/*numberOfClients*/}10</span>
      </div>
      <div className="footer-container">
        <span className="label">Articles:</span>
        <span className="value">{/*numberOfArticles*/}10</span>
      </div>
    </div>
  );
};

export default Footer;
