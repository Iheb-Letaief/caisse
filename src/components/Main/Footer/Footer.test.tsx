import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders total remise, total payé, reste à payer, number of clients, and number of articles', () => {
    render(<Footer />);

    const totalRemiseLabel = screen.getByText('Total Remise:');
    expect(totalRemiseLabel).toBeInTheDocument();

    const totalRemiseValue = screen.getByText('1$', { selector: '.total-remise .value' });
    expect(totalRemiseValue).toBeInTheDocument();

    const totalPayeLabel = screen.getByText('Total Payé:');
    expect(totalPayeLabel).toBeInTheDocument();

    const totalPayeValue = screen.getByText('70$', { selector: '.total-paye .value' });
    expect(totalPayeValue).toBeInTheDocument();

    const resteAPayerLabel = screen.getByText('Reste à Payer:');
    expect(resteAPayerLabel).toBeInTheDocument();

    const resteAPayerValue = screen.getByText('5$', { selector: '.reste-a-payer .value' });
    expect(resteAPayerValue).toBeInTheDocument();

    const numberOfClientsLabel = screen.getByText('Clients:');
    expect(numberOfClientsLabel).toBeInTheDocument();

    const numberOfClientsValue = screen.getByText('10', { selector: '.footer-container:nth-child(4) .value' });
    expect(numberOfClientsValue).toBeInTheDocument();

    const numberOfArticlesLabel = screen.getByText('Articles:');
    expect(numberOfArticlesLabel).toBeInTheDocument();

    const numberOfArticlesValue = screen.getByText('10', { selector: '.footer-container:nth-child(5) .value' });
    expect(numberOfArticlesValue).toBeInTheDocument();
  });
});
