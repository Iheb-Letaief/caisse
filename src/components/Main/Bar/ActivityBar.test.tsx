/*
import { render, screen, fireEvent } from '@testing-library/react';
import ActivityBar from './ActivityBar';

describe('ActivityBar', () => {
  test('renders ActivityBar', () => {
    render(<ActivityBar />);

    const activityItems = ['Foot', 'Badminton', 'Padel', 'Squash', 'Anniversaire', 'Location'];
    activityItems.forEach((item) => {
      const activityElement = screen.getByText(item);
      expect(activityElement).toBeInTheDocument();
    });
  });

  test('selects and displays activity', () => {
    render(<ActivityBar />);

    const activityItems = ['Foot', 'Badminton', 'Padel', 'Squash', 'Anniversaire', 'Location'];

    activityItems.forEach((item) => {
      const activityElement = screen.getByText(item);
      fireEvent.click(activityElement);

      const footLabelElement = screen.getByText('HP');
      const footTimeElement = screen.getByText('1H');
      const nbPersElement = screen.getByText(/9|10/); 
      const prixElement = screen.getByText(/90|135/); 

      expect(footLabelElement).toBeInTheDocument();
      expect(footTimeElement).toBeInTheDocument();
      expect(nbPersElement).toBeInTheDocument();
      expect(prixElement).toBeInTheDocument();
    });
  });
});
*/