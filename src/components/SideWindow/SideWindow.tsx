import React, { useState } from "react";
import "./SideWindow.css";
import { AttenteButton, AutreButton, CbButton, CloseButton, EncaisserButton, EspButton, RemiseButton } from "../Buttons/Buttons";


const TableItem = () => {
  const [quantity, setQuantity] = useState(0);

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
      <td className="label-cell">FOOT HP 1H 10 pers</td>
      <td className="price-cell">90$</td>
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
                  <TableItem/>
                  <TableItem/>
                  <TableItem/>
                  <TableItem/>
                  <TableItem/>
                  <TableItem/>
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
