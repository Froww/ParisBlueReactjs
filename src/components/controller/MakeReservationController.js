import React,{useState} from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import MakeReservationView from "../view/MakeReservationView";

export default function MakeReservationController(props) {

  const backUrl = "http://localhost:9090/api/nonauth/reservation/add";
  

  function makeReservation(firstname, lastname, email, phone, startDate, endDate, offerId, roomId, isPayed){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            person:{firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone},
            plannedArrival: startDate,
            plannedDeparture: endDate,
            offer:{
                offerId: offerId
            ,
            room:{roomId: roomId}},
            isPayed: isPayed
        })
    };

    console.log(requestOptions);

    fetch(backUrl, requestOptions)
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Le serveur n\'a pas répondu avec du JSON');
            }else{
                return response.json();
            
        }})
        .then(data => {
            console.log(data);
            props.setReservation(data);
        })
        .catch((error) => {
            alert("Pas de réservation trouvée avec ces informations");
        });
    
    };

  
    
    

  return (
    <MakeReservationView 
    makeReservation={(firstname,
       lastname,
       email, 
       phone, 
       startDate, endDate, offerId, roomId, isPayed) => 
       makeReservation(firstname, lastname, email, phone, startDate, endDate, offerId, roomId, isPayed)} 
       selectedOffer={props.selectedOffer}
        reservationInfo={props.reservationInfo}
        setReservationInfo={(data) => props.setReservationInfo(data)}
       />
  );
}