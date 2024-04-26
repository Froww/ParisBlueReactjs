import React from "react";
import { Row, Col, Card, InputGroup, Form, Container,ListGroup } from "react-bootstrap";

export default function DisplayReservation(props) {
    const reservation = props.reservation;

    const nights = (new Date(reservation.plannedDepartureDate) - new Date(reservation.plannedArrivalDate)) / (1000 * 3600 * 24);
    const totalPrice = (nights * reservation.nightlyRate).toFixed(2);

    // Formatter la date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    if(reservation == null) return (<Container className="my-3"><Card><Card.Body>Chargement...</Card.Body></Card></Container>);
    return (
        <Container className="my-3">
            <Card>
                <Card.Header className="text-center bg-dark text-white">Récapitulatif de la Réservation</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Numéro de réservation :</strong> {reservation.reservationNumber}</ListGroup.Item>
                        <ListGroup.Item><strong>Nom :</strong> {reservation.firstname} {reservation.lastname}</ListGroup.Item>
                        <ListGroup.Item><strong>Email :</strong> {reservation.email}</ListGroup.Item>
                        <ListGroup.Item><strong>Téléphone :</strong> {reservation.phone}</ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col><strong>Arrivée :</strong> {formatDate(reservation.plannedArrivalDate)}</Col>
                                <Col><strong>Départ :</strong> {formatDate(reservation.plannedDepartureDate)}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><strong>Nombre de nuitées :</strong> {nights}</ListGroup.Item>
                        <ListGroup.Item><strong>Type de chambre :</strong> {reservation.roomType}</ListGroup.Item>
                        <ListGroup.Item><strong>Tarif par nuitée :</strong> {reservation.nightlyRate.toFixed(2)}€</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col><strong>Montant total :</strong></Col>
                        <Col className="text-right"><strong>{totalPrice}€</strong></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    );
}
