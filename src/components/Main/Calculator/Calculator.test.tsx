import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('displays numbers and performs calculations', () => {
    render(<Calculator onSoldeButtonClick={() => {}} onResultChange={() => {}} />);

    const resultBox = screen.getByTestId('result-box');
    expect(resultBox).toHaveTextContent('0');

    fireEvent.click(screen.getByText('7'));
    expect(resultBox).toHaveTextContent('7');

    fireEvent.click(screen.getByText('8'));
    expect(resultBox).toHaveTextContent('78');

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    expect(resultBox).toHaveTextContent('5');

    fireEvent.click(screen.getByText('='));
    expect(resultBox).toHaveTextContent('83');
  });

  test('clears the result', () => {
    render(<Calculator onSoldeButtonClick={() => {}} onResultChange={() => {}} />);

    const resultBox = screen.getByTestId('result-box');
    expect(resultBox).toHaveTextContent('0');

    fireEvent.click(screen.getByText('7'));
    expect(resultBox).toHaveTextContent('7');

    fireEvent.click(screen.getByText('C'));
    expect(resultBox).toHaveTextContent('0');
  });

  test('performs calculations with errors', () => {
    render(<Calculator onSoldeButtonClick={() => {}} onResultChange={() => {}} />);

    const resultBox = screen.getByTestId('result-box');
    expect(resultBox).toHaveTextContent('0');

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByTestId('operation-division'));
    fireEvent.click(screen.getByText('1'));
    expect(resultBox).toHaveTextContent('Error');
  });

});
