import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as Icons from "../../utils/Icons"; 

const Sidebar: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Array<number | null>>([null, null]);

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

  const menuArticles = menuItems.slice(0, 4);
  const menuOperations = menuItems.slice(4, 8);

  const handleItemClick = (section: number, index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems];
      newSelectedItems[section] = index;
      return newSelectedItems;
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <ul>
          {menuArticles.map((menuItem, index) => (
            <li key={index}>
              {menuItem.link ? (
                <Link to={menuItem.link}>
                  <div
                    className={`sidebar-item ${
                      selectedItems[0] === index ? "active" : ""
                    }`}
                    onClick={() => handleItemClick(0, index)}
                  >
                    <div className="sidebar-icon">{menuItem.icon}</div>
                    <span className="sidebar-text">{menuItem.text}</span>
                  </div>
                </Link>
              ) : (
                <a href="#">
                  <div
                    className={`sidebar-item ${
                      selectedItems[0] === index ? "active" : ""
                    }`}
                    onClick={() => handleItemClick(0, index)}
                  >
                    <div className="sidebar-icon">{menuItem.icon}</div>
                    <span className="sidebar-text">{menuItem.text}</span>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-bottom">
        <ul>
          {menuOperations.map((menuItem, index) => (
            <li key={index}>
              {menuItem.link ? (
                <Link to={menuItem.link}>
                  <div
                    className={`sidebar-item ${
                      selectedItems[1] === index ? "active" : ""
                    }`}
                    onClick={() => handleItemClick(1, index)}
                  >
                    <div className="sidebar-icon">{menuItem.icon}</div>
                    <span className="sidebar-text">{menuItem.text}</span>
                  </div>
                </Link>
              ) : (
                <a href="#">
                  <div
                    className={`sidebar-item ${
                      selectedItems[1] === index ? "active" : ""
                    }`}
                    onClick={() => handleItemClick(1, index)}
                  >
                    <div className="sidebar-icon">{menuItem.icon}</div>
                    <span className="sidebar-text">{menuItem.text}</span>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
