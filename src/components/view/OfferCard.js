import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { displayFormatDate } from '../Util';
import { Link } from 'react-router-dom';


export default function OfferCard(props) {

  
  const offer = props.offer;
  const start = new Date(props.startDate);
  const end = new Date(props.endDate);
  const numberOfNights = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  const totalPrice = (numberOfNights * offer.nightlyRate).toFixed(2);
  const description = props.description;

  function handleClick() {
    props.setSelectedOffer({offer, startDate: props.startDate, endDate: props.endDate, totalPrice: totalPrice, description: description});
  }

  return (

    <Card className="my-3">
        <Row className="g-0">
        <Col xs={12} md={5} className="d-flex p-3">
      <Card.Img src={description.image} className="img-fluid" />
        </Col>
        <Col xs={12} md={7}>
      <Card.Body>
        <Card.Title>{description.desc}</Card.Title>
        <Card.Text>
          <p>{`Séjour du ${displayFormatDate(props.startDate)} au ${displayFormatDate(props.endDate)}`}</p>
          <p>{`${numberOfNights} nuit(s) - ${totalPrice}€`}</p>
        </Card.Text>
        <Button variant="primary" as={Link} to={"/Reserver/form"} onClick={() => handleClick()} hidden={props.selectedOffer !== null}>
          Reserver cette offre
        </Button>
      </Card.Body>
      </Col>
      </Row>
    </Card>
  );
}


