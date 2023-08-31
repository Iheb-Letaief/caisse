import { render, screen, fireEvent,waitFor } from "@testing-library/react";
import SideWindow from "./SideWindow";

describe("SideWindow component", () => {
  it("renders the ticket information", () => {
    render(<SideWindow />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("06.01.25.50.18")).toBeInTheDocument();
    expect(screen.getByText("13/07/2023")).toBeInTheDocument();
    expect(screen.getByText("Terrain 1")).toBeInTheDocument();
    expect(screen.getByText("18:00 - 19:00")).toBeInTheDocument();
  });

  it("increments and decrements the quantity", () => {
    render(<SideWindow />);

    // Get the increment and decrement buttons
    const incrementButton = screen.getAllByText("+")[0];
    const decrementButton = screen.getAllByText("-")[0];

    // Open the first dropdown
    fireEvent.click(screen.getAllByText("▼")[0]);

    // Find the quantity display within the first table row
    const firstTableRow = screen.getAllByText("▼")[0].closest("tr");
    const quantityDisplay = firstTableRow && firstTableRow.querySelector(".quantity");

    if (quantityDisplay) {
      expect(quantityDisplay).toHaveTextContent("0");

      // Increment the quantity and check if it's displayed correctly
      fireEvent.click(incrementButton);
      waitFor(() => {
        expect(quantityDisplay).toHaveTextContent("1");
      });

      // Decrement the quantity and check if it's displayed correctly
      fireEvent.click(decrementButton);
      waitFor(() => {
        expect(quantityDisplay).toHaveTextContent("0");
      });
    }
  });

  it("opens and closes the dropdown", () => {
    render(<SideWindow />);

    const closedArrowButtons = screen.getAllByText("▼");
    closedArrowButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    // Open the first dropdown
    fireEvent.click(closedArrowButtons[0]);

    // The first dropdown should be open now
    const openedArrowButton = screen.getByText("▲");
    expect(openedArrowButton).toBeInTheDocument();

    // Close the first dropdown
    fireEvent.click(openedArrowButton);

    // The first dropdown should be closed again
    expect(closedArrowButtons[0]).toBeInTheDocument();
  });


});
