import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("Sidebar component", () => {
  it("renders menu items", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const menuItems = [
      { icon: "Activité", link: "/activite" },
      { icon: "Boissons", link: "#" },
      { icon: "Snacking", link: "#" },
      { icon: "Menu", link: "#" },
      { icon: "Imprimer", link: "#" },
      { icon: "TicketsEnAttente", link: "#" },
      { icon: "Tickets", link: "#" },
      { icon: "Réservation", link: "#" },
      { icon: "Clients", link: "#" },
    ];

    menuItems.forEach((menuItem) => {
      const menuItemElement = screen.getByTestId("FutbolIcon");
      expect(menuItemElement).toBeInTheDocument();
    });
  });

  it("handles item clicks", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const menuItem = screen.getByText("Activité");
    menuItem.click();

  });
});
