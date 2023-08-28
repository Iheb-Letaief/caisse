import { render, screen, fireEvent } from '@testing-library/react';
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; 


import {
  PlayerCard,
  PlayerCard2,
  PlayerCard3,
  PayCard,
  EncaisseCard,
  FootHpCard,
  PaiementCard,
} from './Cards';

describe('PlayerCard', () => {
  test('renders PlayerCard', () => {
    render(<PlayerCard name="John" price={10} />);
    const playerNameElement = screen.getByText('John');
    const playerPriceElement = screen.getByText('10$');
    expect(playerNameElement).toBeInTheDocument();
    expect(playerPriceElement).toBeInTheDocument();
  });
});

describe('PlayerCard2', () => {
  test('renders PlayerCard2', () => {
    render(<PlayerCard2 />);
    const playerNameElement = screen.getByText('Joueur 2');
    const playerPriceElement = screen.getByText('9$');
    expect(playerNameElement).toBeInTheDocument();
    expect(playerPriceElement).toBeInTheDocument();
  });
});

describe('PlayerCard3', () => {
  test('renders PlayerCard3', () => {
    render(<PlayerCard3 />);
    const playerNameElement = screen.getByText('Joueur 3');
    const playerPriceElement = screen.getByText('9$');
    expect(playerNameElement).toBeInTheDocument();
    expect(playerPriceElement).toBeInTheDocument();
  });
});

describe('PayCard', () => {
  test('renders PayCard', () => {
    render(<PayCard />);
    const payCardElement = screen.getByText('Payé');
    expect(payCardElement).toBeInTheDocument();
  });
});

describe('EncaisseCard', () => {
  test('renders EncaisseCard', () => {
    render(<EncaisseCard />);
    const encaisseCardElement = screen.getByText('Encaissé');
    expect(encaisseCardElement).toBeInTheDocument();
  });
});

describe('FootHpCard', () => {
  test('renders FootHpCard', () => {
    render(<FootHpCard footLabel="Label" footTime="Time" nbPers={5} prix={50} />);
    const footLabelElement = screen.getByText('Label - Time');
    const footValueElement = screen.getByText('5 pers - 50$');
    expect(footLabelElement).toBeInTheDocument();
    expect(footValueElement).toBeInTheDocument();
  });
});

describe('PaiementCard', () => {
  test('renders PaiementCard', () => {
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn();
    render(
      <PaiementCard
        label="Paiement"
        icon={faCoffee} 
        value="123"
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );

    const inputElement = screen.getByRole('textbox');
    const labelElement = screen.getByText('Paiement');
    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: '456' } });
    expect(mockOnChange).toHaveBeenCalledWith('456');

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
