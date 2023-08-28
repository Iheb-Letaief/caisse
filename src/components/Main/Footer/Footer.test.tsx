import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders total remise, total payé, reste à payer, number of clients, and number of articles', () => {
    render(<Footer />);

    const totalRemiseLabel = screen.getByText('Total Remise:');
    expect(totalRemiseLabel).toBeInTheDocument();

    const totalRemiseValue = screen.getByText('1$');
    expect(totalRemiseValue).toBeInTheDocument();

    const totalPayeLabel = screen.getByText('Total Payé:');
    expect(totalPayeLabel).toBeInTheDocument();

    const totalPayeValue = screen.getByText('70$');
    expect(totalPayeValue).toBeInTheDocument();

    const resteAPayerLabel = screen.getByText('Reste à Payer:');
    expect(resteAPayerLabel).toBeInTheDocument();

    const resteAPayerValue = screen.getByText('5$');
    expect(resteAPayerValue).toBeInTheDocument();

    const numberOfClientsLabel = screen.getByText('Clients:');
    expect(numberOfClientsLabel).toBeInTheDocument();

    const numberOfClientsValue = screen.getAllByText('10');
    expect(numberOfClientsValue).toBeInTheDocument();

    const numberOfArticlesLabel = screen.getByText('Articles:');
    expect(numberOfArticlesLabel).toBeInTheDocument();

    const numberOfArticlesValue = screen.getByText('10');
    expect(numberOfArticlesValue).toBeInTheDocument();
  });
});
