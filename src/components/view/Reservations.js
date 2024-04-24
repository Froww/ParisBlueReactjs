import React, { useState } from "react";
import { Row, Col, Card, InputGroup, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Reservations() {

    const [fields, setFields] = useState({
        login: "",
        password: ""
    });


    return(
        <Row className="d-flex justify-content-center p-3 pt-5">
            <Card className="max-width-50-rem p-0">
                <Card.Header className="text-center">Authentification</Card.Header>
            
            <Row className="pt-4 ps-3 pe-3">
                <Col sm={{offset:1 ,span:10}} md={3} lg={2}>
                    <output className="text-center">Identifiant</output>
                </Col >
                <Col sm={{offset:1 ,span:10}} md={{offset:0 ,span:7}} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpLogin">
                            <i className="fa fa-user"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="veuillez saisir votre identifiant"
                            aria-describedby="inpLogin"
                            value={fields.login}
                            onChange={(e) => setFields({...fields, login: e.target.value})}
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="ps-3 pe-3">
                <Col sm={{offset:1 ,span:10}} md={3} lg={2}>
                    <output className="text-center">Mot de passe</output>
                </Col >
                <Col sm={{offset:1 ,span:10}} md={{offset:0 ,span:7}} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpPassword">
                            <i className="fa fa-key"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="veuillez saisir votre mot de passe"
                            aria-describedby="inpPassword"
                            value={fields.password}
                            onChange={(e) => setFields({...fields, password: e.target.value})}
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="pb-3 ps-3 pe-3">
                <Col sm={{offset:1 ,span:10}} lg={4} className="p-1">
                    <Nav.Link
                        as={Link}
                        to="/welcome"
                        className="btn bg-black w-100 text-white"
                        onClick={() => props.fetchOwner(fields.login, fields.password)}
                    >
                        Connexion
                    </Nav.Link>
                </Col>
                <Col sm={{offset:1 ,span:10}} lg={4} className="p-1">
                    <Nav.Link
                        as={Link}
                        to="/space"
                        className="btn bg-black w-100 text-white"
                    >
                        Mot de passe oublié
                    </Nav.Link>

                </Col>
            </Row>
            </Card>
        </Row>

    )
}