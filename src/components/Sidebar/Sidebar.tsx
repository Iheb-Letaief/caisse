import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as Icons from "../../utils/Icons"; // Import all SVG icons from the icons.js file

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <Icons.FutbolIcon />, text: "Activité", link: "/activite" },
    { icon: <Icons.ChampagneIcon />, text: "Boissons", link: "#" },
    { icon: <Icons.PizzaIcon />, text: "Snacking", link: "#" },
    { icon: <Icons.UtensilsIcon />, text: "Menu", link: "#" },
    { icon: <Icons.PrintIcon />, text: "Imprimer", link: "#" },
    { icon: <Icons.ReceiptIcon />, text: "Tickets en attente", link: "#" },
    { icon: <Icons.InvoiceDollarIcon />, text: "Tickets", link: "#" },
    { icon: <Icons.CalendarDaysIcon />, text: "Réservation", link: "#" },
    { icon: <Icons.UserIcon />, text: "Clients", link: "#" },
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {menuItem.link ? (
              <Link to={menuItem.link}>
                <div className="sidebar-item">
                  <div className="sidebar-icon">{menuItem.icon}</div>
                  <span className="sidebar-text">{menuItem.text}</span>
                </div>
              </Link>
            ) : (
              <a href="#">
                <div className="sidebar-item">
                  <div className="sidebar-icon">{menuItem.icon}</div>
                  <span className="sidebar-text">{menuItem.text}</span>
                </div>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Sidebar;
