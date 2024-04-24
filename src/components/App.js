import React,{useContext,useState,useEffect} from "react";
import {myContext} from "../index";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Reservations from "./view/Reservations";

export default function App() {

    return(
        
     
     <div>
        
        
        <BrowserRouter>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Paris Blue Hotel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                                <Button variant="outline-info" as={Link} to="/Welcome">Accueil</Button>
                                <Button variant="outline-info" as={Link} to="/Chambres">Chambres</Button>
                                <Button variant="outline-info" as={Link} to="/Reserver">Réserver</Button>
                                <Button variant="outline-info" as={Link} to="/Contact">Contact</Button>
                            </Nav>
                            <Nav>
                                <Button variant="outline-info" as={Link} to="/Reservations" className="ms-auto">Mes réservations</Button>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <article>

            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/Welcome" element={<Welcome/>}/>
                <Route path="/Chambres" element={<Welcome/>}/>
                <Route path="/Reserver" element={<Welcome/>}/>
                <Route path="/Contact" element={<Welcome/>}/>
                <Route path="/Reservations" element={<Reservations/>}/>
                
            </Routes>

            </article>
            
        </BrowserRouter>
        
        
        
     </div>
        

    );
  
      
}
