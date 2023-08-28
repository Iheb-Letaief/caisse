import { render, screen } from '@testing-library/react';
import Ticket from './Tickets';

describe('Ticket', () => {
  test('renders Ticket', () => {
    render(
      <Ticket
        id={1}
        terrain={1}
        time={new Date()}
        name="John Doe"
        num={"06.01.25.50.18"}
        duration="1H30"
        montant={10}
        nbParticipants={5}
        nbArticles={2}
      />
    );

    const activityNameElement = screen.getByText('F');
    const ticketIdElement = screen.getByText('#1');
    const ticketTerrainElement = screen.getByText('Terrain 1');
    const ticketTimeElement = screen.getByText('18:00 - 19:00');
    const participantNameElement = screen.getByText('John Doe');
    const participantNumElement = screen.getByText('06.01.25.50.18');
    const participantDurationElement = screen.getByText('1H30');
    const montantElement = screen.getByText('10$');
    const nbParticipantsElement = screen.getByText('5');
    const nbArticlesElement = screen.getByText('2');
    const detailsButtonElement = screen.getByText('Détails');
    const modifierButtonElement = screen.getByText('Modifier');

    expect(activityNameElement).toBeInTheDocument();
    expect(ticketIdElement).toBeInTheDocument();
    expect(ticketTerrainElement).toBeInTheDocument();
    expect(ticketTimeElement).toBeInTheDocument();
    expect(participantNameElement).toBeInTheDocument();
    expect(participantNumElement).toBeInTheDocument();
    expect(participantDurationElement).toBeInTheDocument();
    expect(montantElement).toBeInTheDocument();
    expect(nbParticipantsElement).toBeInTheDocument();
    expect(nbArticlesElement).toBeInTheDocument();
    expect(detailsButtonElement).toBeInTheDocument();
    expect(modifierButtonElement).toBeInTheDocument();
  });
});
