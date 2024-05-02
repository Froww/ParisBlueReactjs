import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { displayFormatDate } from "../Util";

export default function ReservationConfirmation(props) {

    console.log(props);
    
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Confirmation de Réservation</Card.Header>
                <Card.Body>
                    <Card.Title>Merci, {props.firstName}!</Card.Title>
                    <Card.Text>Votre réservation a été confirmée.</Card.Text>
                    <Card.Text>Séjour du {props.startDate} au {props.endDate}</Card.Text>
                    <Button variant="success">Voir Réservation</Button>
                    <Button variant="link">Retour à l'accueil</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Nous avons hâte de vous accueillir!</Card.Footer>
            </Card>
        </div>
    );
}