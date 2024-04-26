import React, { useState } from "react";
import { Row, Col, Card, InputGroup, Nav, Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

export default function BookingSearch(props) {


    const [fields, setFields] = useState({
        login: "",
        password: "",
        resNumber: "RES123456",
        email: "john.doe@example.com",
        lastname: "Doe"
    });


    return(
        
        <div className="container">
            <Row className="d-flex justify-content-center p-3 pt-5">
            <Card className="max-width-50-rem p-0">
                <Card.Header className="text-center">Identification de la réservation</Card.Header>
            
            <Row className="pt-4 ps-3 pe-3">
                <Col sm={{offset:1 ,span:10}} md={3} lg={3}>
                    <output className="text-center">Numero de réservation</output>
                </Col >
                <Col sm={{offset:1 ,span:10}} md={{offset:0 ,span:7}} lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpResNumber">
                            <i className="fa-solid fa-hashtag"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Veuillez le numero de la réservation"
                            aria-describedby="inpResNumber"
                            value={fields.resNumber}
                            onChange={(e) => setFields({...fields, resNumber: e.target.value})}
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="ps-3 pe-3">
                <Col sm={{offset:1 ,span:10}} md={3} lg={3}>
                    <output className="text-center">Nom de famille</output>
                </Col >
                <Col sm={{offset:1 ,span:10}} md={{offset:0 ,span:7}} lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpLastname">
                            <i className="fa fa-user"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Veuillez le nom de famille figurant sur la réservation"
                            aria-describedby="inpLastname"
                            value={fields.lastname}
                            onChange={(e) => setFields({...fields, lastname: e.target.value})}
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="ps-3 pe-3">
                <Col sm={{offset:1 ,span:10}} md={3} lg={3}>
                    <output className="text-center">Adresse Email</output>
                </Col >
                <Col sm={{offset:1 ,span:10}} md={{offset:0 ,span:7}} lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpEmail">
                            
                            <i className="fa-sharp fa-solid fa-at"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Veuillez saisir votre identifiant"
                            aria-describedby="inpEmail"
                            value={fields.email}
                            onChange={(e) => setFields({...fields, email: e.target.value})}
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="pb-3 ps-3 pe-3">
                <div className="d-flex justify-content-center w-100">
                    <Button variant="light"
                            as={Link}
                            to="/BookingSearch"
                            onClick={() => props.fetchReservation(fields.email, fields.lastname, fields.resNumber)}
                     className="w-50 ">Rechercher</Button>
                </div>
                    
                
                
            </Row>
            </Card>
        </Row>
        </div>
        

    )
}