import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faChampagneGlasses,
  faPizzaSlice,
  faUtensils,
  faPrint,
  faReceipt,
  faFileInvoiceDollar,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/activite" >
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faFutbol} size="xl" /></div>
                <span className="sidebar-text">Activité</span>
            </div>
            
          </Link>
        </li>
        <li>
          <a href="#">
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faChampagneGlasses} size="xl" /></div>
                <span className="sidebar-text">Boissons</span>
            </div>
            
          </a>
        </li>
        <li>
          <a href="#">
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faPizzaSlice} size="xl" /></div>
                <span className="sidebar-text">Snacking</span>
            </div>
            
          </a>
        </li>
        <li>
          <a href="#">
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faUtensils} size="xl" /></div>
                <span className="sidebar-text">Menu</span>
            </div>
            
          </a>
        </li>

        <div className="sidebar-bottom">
          <li>
            <a href="#">
              <div className="sidebar-item">
                  <div className="sidebar-icon"><FontAwesomeIcon icon={faPrint} size="xl" /></div>   
                  <span className="sidebar-text">Imprimer</span>
              </div>
              
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar-item">
                  <div className="sidebar-icon"><FontAwesomeIcon icon={faReceipt} size="xl" /></div>
                  <span className="sidebar-text">Tickets en attente</span>
              </div>
              
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar-item">
                  <div className="sidebar-icon"><FontAwesomeIcon icon={faFileInvoiceDollar} size="xl" /></div>
                  <span className="sidebar-text">Tickets</span>
              </div>
              
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar-item">
                  <div className="sidebar-icon"><FontAwesomeIcon icon={faCalendarDays} size="xl" /></div>
                  <span className="sidebar-text">Réservation</span>
              </div>
              
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar-item">
                  <div className="sidebar-icon"><FontAwesomeIcon icon={faUser} size="xl" /></div>
                  <span className="sidebar-text">Clients</span>
              </div>
              
            </a>
          </li>
        </div>




        
      </ul>
    </div>
  );
};

export default Sidebar;
