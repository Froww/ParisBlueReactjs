import React,{useContext,useState,useEffect} from "react";
import {myContext} from "../index";
import { Button, Container, Nav, Navbar,NavDropdown} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import BookingSearchController from "./controller/BookingSearchController";
import DisplayReservation from "./view/DisplayReservation";
import AvailableOffersController from "./controller/AvailableOffersController";

export default function App() {

    const [reservation, setReservation] = useState(null);
    const [availableOffers, setAvailableOffers] = useState([]);

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
                                <Button variant="outline-info" as={Link} to="/BookingSearch" className="ms-auto">Mes réservations</Button>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <article>

            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/Welcome" element={<Welcome/>}/>
                <Route path="/Chambres" element={<Welcome/>}/>
                <Route path="/Reserver" element={<AvailableOffersController availableOffers = {availableOffers} 
                                                setAvailableOffers = {(data) => setAvailableOffers(data)} />}/>
                <Route path="/Contact" element={<Welcome/>}/>
                <Route path="/BookingSearch" element={<BookingSearchController reservation={reservation}
                                                setReservation={(data) => setReservation(data)}/>}/>
                <Route path="/Reservation" element={<DisplayReservation/>}/>

                
            </Routes>

            </article>
            
        </BrowserRouter>
        
        
        
     </div>
        

    );
  
      
}
