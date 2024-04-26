import React from "react";
import BookingSearch from "../view/BookingSearch";
import DisplayReservation from "../view/DisplayReservation";

export default function BookingSearchController(props) {

    const backUrl = "http://localhost:9090/api/nonauth/reservation/get"

    const fetchReservation = (email,lastname, resNumber) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: email, lastname: lastname, reservationNumber: resNumber})
        };
        fetch(backUrl, requestOptions)
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Le serveur n\'a pas répondu avec du JSON');
                }else{
                    return response.json();
                }

            })
            .then(data => {
                console.log(data);
                props.setReservation(data);
            })
            .catch((error) => {
                alert("Pas de réservation trouvée avec ces informations");
            });
            
    }
    if (props.reservation == null) {
        return(
            <BookingSearch fetchReservation={(email,lastname, resNumber) => fetchReservation(email,lastname, resNumber)} />
        )
    }else{
        return(
            <DisplayReservation reservation={props.reservation}/>
        )
    }
}