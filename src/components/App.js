import React,{useContext,useState,useEffect} from "react";
import {myContext} from "../index";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";

export default function App() {

    return(
        
     <myContext.Provider value={{}}>
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold fs-3">Paris Blue Hotel</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/about" element={<h4 className="text-center fst-italic">About</h4>}/>
                <Route path="/contact" element={<h4 className="text-center fst-italic">Contact</h4>}/>
            </Routes>
        </BrowserRouter>
     </myContext.Provider>
        

    );
  
      
}
