import React, { useState } from 'react';
import { Button, Form, Container, Card, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OfferCard from './OfferCard';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

export default function MakeReservationView(props) {
    const [fields, setFields] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", paymentMethod: "Choissez une méthode de paiement" });
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');


    return (
        <div>
            <Container className="p-3">
                <OfferCard offer={props.selectedOffer.offer}
                    startDate={props.selectedOffer.startDate}
                    endDate={props.selectedOffer.endDate}
                    description={props.selectedOffer.description}
                    setSelectedOffer={props.setSelectedOffer} />
            </Container>

            <Card className="container p-3">

                <Card.Title className="text-center">Informations de réservation</Card.Title>
                <Card.Body>
                    <Form className="container">
                        <Form.Group className="mb-3">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Prénom" value={fields.firstName} onChange={(e) => setFields({ ...fields, firstName: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={fields.lastName} onChange={(e) => setFields({ ...fields, lastName: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Numéro de téléphone</Form.Label>
                            <Form.Control type="tel" placeholder="Numéro de téléphone" value={fields.phoneNumber}
                                onChange={(e) => setFields({ ...fields, phoneNumber: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Méthode de paiement</Form.Label>
                            <Form.Select aria-label="Méthode de paiement" value={fields.paymentMethod}
                                onChange={(e) => setFields({ ...fields, paymentMethod: e.target.value })}>
                                <option>Choissez une méthode de paiement</option>
                                <option>Paiement au check-in</option>
                                <option>Carte Visa</option>
                            </Form.Select>

                        </Form.Group>

                        <Row className="justify-content-center">
                        <Col lg={6} >
                        <Card className='bg-light' hidden={fields.paymentMethod !== "Carte Visa"}>
                            <Card.Header as="h5" className="text-center">Information de paiement</Card.Header>
                            <Card.Body>
                                <Card.Title className='d-flex'>
                                    <div className="align-self-start">Motant à payer:</div><div className="ms-auto">€{props.selectedOffer.totalPrice}</div>
                                </Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="cardholderName">
                                        <Form.Label>Nom de propriétaire de la carte</Form.Label>
                                        <Form.Control type="text" placeholder="Nom figurant sur la carte" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="cardNumber">
                                        <Form.Label>Numéro de carte</Form.Label>
                                        <Form.Control type="text" placeholder="Entrez le numero de carte" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                                    </Form.Group>

                                    <InputGroup className="mb-3">
                                        <FormControl type="text" placeholder="Expiration" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                                        <FormControl type="text" placeholder="Cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                                    </InputGroup>

                                    <Button variant="success" onClick={() => props.makeReservation(
                            fields.firstName,
                            fields.lastName,
                            fields.email,
                            fields.phoneNumber,
                            props.selectedOffer.startDate,
                            props.selectedOffer.endDate,
                            props.selectedOffer.offer.offerId,
                            props.selectedOffer.offer.room.roomId,
                            fields.paymentMethod === "Carte Visa" ? true : false
                        )}>Proceder au paiement</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        </Col>
                        </Row>

                        <Button variant="primary"  onClick={() => props.makeReservation(
                            fields.firstName,
                            fields.lastName,
                            fields.email,
                            fields.phoneNumber,
                            props.selectedOffer.startDate,
                            props.selectedOffer.endDate,
                            props.selectedOffer.offer.offerId,
                            props.selectedOffer.offer.room.roomId,
                            fields.paymentMethod === "Carte Visa" ? true : false
                        )}
                         hidden={fields.paymentMethod === "Carte Visa"}>Confirmer la réservation</Button>


                    </Form>


                </Card.Body>
            </Card>
        </div>
    );
}