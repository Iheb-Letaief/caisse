import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import '@testing-library/jest-dom';

import {
  ValidateButton,
  DisableValidateButton,
  PaymentButton,
  PlusMinusButton,
  SoldeButton,
  RemiseButton,
  AttenteButton,
  EncaisserButton,
  DangerEncaisserButton,
  EspButton,
  CbButton,
  AutreButton,
  CloseButton,
} from './Buttons'; 



describe('Buttons components', () => {
  test('renders ValidateButton', () => {
    render(<ValidateButton />);
    const validateButtonElement = screen.getByText(/Valider/i);
    expect(validateButtonElement).toBeInTheDocument();
  });

  test('renders DisableValidateButton', () => {
    render(<DisableValidateButton />);
    const disableValidateButtonElement = screen.getByText(/Valider/i);
    expect(disableValidateButtonElement).toBeInTheDocument();
  });

  test('renders PaymentButton', () => {
    render(<PaymentButton />);
    const paymentButtonElement = screen.getByText(/Payer/i);
    expect(paymentButtonElement).toBeInTheDocument();
  });

  test('renders PlusMinusButton', () => {
    render(<PlusMinusButton />);
    const plusButtonElement = screen.getByText('+');
    const minusButtonElement = screen.getByText('-');
    expect(plusButtonElement).toBeInTheDocument();
    expect(minusButtonElement).toBeInTheDocument();
  });

  test('renders SoldeButton', () => {
    render(<SoldeButton />);
    const soldeButtonElement = screen.getByText(/Solde/i);
    expect(soldeButtonElement).toBeInTheDocument();
  });

  test('renders RemiseButton', () => {
    render(<RemiseButton />);
    const remiseButtonElement = screen.getByText(/Remise/i);
    expect(remiseButtonElement).toBeInTheDocument();
  });

  test('renders AttenteButton', () => {
    render(<AttenteButton />);
    const attenteButtonElement = screen.getByText(/Attente/i);
    expect(attenteButtonElement).toBeInTheDocument();
  });

  test('renders EncaisserButton', () => {
    render(<EncaisserButton />);
    const encaisserButtonElement = screen.getByText(/Encaisser/i);
    expect(encaisserButtonElement).toBeInTheDocument();
  });

  test('renders DangerEncaisserButton', () => {
    render(<DangerEncaisserButton />);
    const dangerEncaisserButtonElement = screen.getByText(/Encaisser/i);
    expect(dangerEncaisserButtonElement).toBeInTheDocument();
  });

  test('renders EspButton', () => {
    render(<EspButton />);
    const espButtonElement = screen.getByText(/Esp/i);
    expect(espButtonElement).toBeInTheDocument();
  });

  test('renders CbButton', () => {
    render(<CbButton />);
    const cbButtonElement = screen.getByText(/CB/i);
    expect(cbButtonElement).toBeInTheDocument();
  });

  test('renders AutreButton', () => {
    render(<AutreButton />);
    const autreButtonElement = screen.getByText(/Autre/i);
    expect(autreButtonElement).toBeInTheDocument();
  });

  test('renders CloseButton', () => {
    render(<CloseButton />);
  });
});
