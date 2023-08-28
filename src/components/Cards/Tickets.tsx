import React from "react";
import "./Tickets.css";

const activityItems = ["FOOT", "BADMINTON", "PADEL", "SQUASH", "ANNIVERSAIRE", "LOCATION"];

interface TicketProps {
  id: number;
  terrain: number;  
  time: Date;
  name: string;
  num: string;
  duration: string;
  montant: number;
  nbParticipants: number;
  nbArticles: number;
}

const Ticket: React.FC<TicketProps> = ({
  id,
  terrain,
  time,
  name,
  num,
  duration,
  montant,
  nbParticipants,
  nbArticles,
}) => {
  return (
    <div className="ticket">
      <div className="activity">
        <div className="activity-icons">
          <div className="icon">
            {/* Insert your activity icon here */}
          </div>
        </div>
        <div className="activity-name">
        {activityItems[terrain - 1].split("").map((letter, index) => (
            <div key={index}>{letter}</div>
        ))}
        </div>
      </div>
      <div className="ticket-info">
        <div className="ticket-column">
            <p className="ticket-value">#{id}</p>
            <p className="ticket-name">Terrain {terrain}</p>
            <p className="ticket-value">18:00 - 19:00</p>
        </div>
                
        <div className="line-separator"></div>
        <div className="ticket-row">
          <div className="icon pfp">
            {/* Insert your profile picture here */}
          </div>
          <div className="ticket-column">
            <div className="ticket-info-name">
                <p className="ticket-name">{name}</p>
            </div>
            <p className="ticket-value">{num}</p>
            <div className="ticket-row">
                <p className="ticket-name">{duration}</p>
            </div>
          </div>  
        </div>
                
        <div className="line-separator"></div>
        <div className="ticket-column">
          <p className="ticket-label montant">Montant</p>
          <h1 className="ticket-value">{montant}$</h1>
        </div>

        <div className="line-separator"></div>

        <div className="ticket-column">
          <p className="ticket-label participants">Participants</p>
          <h2 className="ticket-value participants">{nbParticipants}</h2>
        </div>
        <div className="line-separator"></div>
        <div className="ticket-column">
          <p className="ticket-label articles">Articles</p>
          <h2 className="ticket-value articles">{nbArticles}</h2>
        </div>
        <div className="buttons-container">
          <button className="details-button">Détails</button>
          <button className="modifier-button">Modifier</button>
        </div>
      </div>
    </div>
  );
};

const Tickets: React.FC = () => {
  return (
    <div className="tickets-container">
      <div className="tickets-column">
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
      </div>
    </div>
  );
};

export default Ticket;