import React from "react";
import "./Tickets.css";

const activityItems = ["Foot", "Badminton", "Padel", "Squash", "Anniversaire", "Location"];


interface TicketProps {
    /*
    id: number;
    terrain: number;
    time: Date;
    name: string;
    num: number;
    duration: string;
    montant: number;
    nbParticipants: number;
    nbArticles: number;
    */
}



export const FootTicket: React.FC<TicketProps> = ({
    /*
    id: number;
    terrain: number;
    time: Date;
    name: string;
    num: number;
    duration: string;
    montant: number;
    nbParticipants: number;
    nbArticles: number;
    */
}) => {
    return <div>Foot Ticket</div>;
}

export const SnackTicket = () => {
    return <div>Snack Ticket</div>;
}

export const Squash = () => {
    return <div>Squash Ticket</div>;
}

export const BoissonsTicket = () => {
    return <div>Boissons Ticket</div>;
}

export const MenuTicket = () => {
    return <div>Menu Ticket</div>;
}