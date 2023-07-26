import React, { useState } from "react";
import "./SideWindow.css";
import { AttenteButton, AutreButton, CbButton, CloseButton, EncaisserButton, EspButton, RemiseButton } from "../Buttons/Buttons";


interface TicketProps {
  id: number;
  terrain: number;
  time: string;
  date: string;
  name: string;
  num: string;
}

interface TableItemProps {
  label: string;
  price: number;
  initialQuantity?: number;
}

const TicketInfo: React.FC<TicketProps> = ({
  id, 
  terrain,
  time, 
  date,
  name,
  num,
}) => {
  return(
    <div className="window-ticket-info">
      <div className="window-ticket-column">
        <p className="window-ticket-name">Ticket</p>
        <p className="window-ticket-value">#{id}</p>
      </div>
      <div className="window-ticket-row">
          <div className="window-pfp">
            {/* pfp */}
          </div>
          <div className="window-ticket-column">
            <p className="window-ticket-name">{name}</p>
            <p className="window-ticket-value">{num}</p>
          </div>  
        </div>
        <div className="window-ticket-column">
          <p className="window-ticket-name">{date}</p>
          <p className="window-ticket-name">Terrain {terrain}</p>
          <p className="window-ticket-name">18:00 - 19:00</p>
        </div>
    </div>
  )
}



const TableItem: React.FC<TableItemProps> = ({ label, price, initialQuantity = 0 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <tr>
      <td className="quantity-cell">
        <button className="decrement-button" onClick={handleDecrement}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="increment-button" onClick={handleIncrement}>
          +
        </button>
      </td>
      <td className="label-cell">{label}</td>
      <td className="price-cell">{price}$</td>
    </tr>
  );
};


const SideWindow = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="side-window">
          <div className="window-header">
            <TicketInfo
              id={123}
              terrain={1}
              time="16h-17h"
              name="John Doe"
              num="06.01.25.50.18"
              date="13/07/2023"
            />
            <div className="close-div" onClick={handleClose}>
              <CloseButton/>
            </div>
          </div>
            
          <div className="content">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox"/>Qté</th>
                    <th>Libellé</th>
                    <th>Prix</th>
                  </tr>
                </thead>
                <tbody>
                  <TableItem label="FOOT HP 1H 10 pers" price={90}/>
                  <TableItem label="FOOT HP 1H 10 pers" price={90}/>
                  <TableItem label="FOOT HP 1H 10 pers" price={90}/>
                  <TableItem label="FOOT HP 1H 10 pers" price={90}/>
                  <TableItem label="FOOT HP 1H 10 pers" price={90}/>
                </tbody>
              </table>

            </div>
            <div className="reste-container">
                <div>RESTE A PAYER</div>
                <div>{ /*total*/ }90 $</div>
              </div>

              <div className="total-container">
                <div>TOTAL T.T.C</div>
                <div>{ /*total*/ }90 $</div>
              </div>

              <div className="btn-row1">
                <EspButton/>
                <CbButton/>
                <AutreButton/>
              </div>
              <div className="btn-row2">
                <RemiseButton/>
                <AttenteButton/>
                <EncaisserButton/>
              </div>

          </div>
          
        </div>
      )}
    </>
  );
};

export default SideWindow;
