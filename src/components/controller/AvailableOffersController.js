import React from "react";
import AvailableOffersView from "../view/AvailableOffersView";
import { useState } from "react";
export default function AvailableOffersController(props) {

    function getAvailableOffers(startDate, endDate){
        console.log(startDate, endDate);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({startDate: startDate, endDate: endDate})
        };
            fetch("http://localhost:9090/api/nonauth/offers/available", requestOptions)
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
                    props.setAvailableOffers(data);
                })
                .catch((error) => {
                    alert("Pas d'offres disponibles pour ces dates");
                });
    }
        

    return (
        <AvailableOffersView getAvailableOffers={(startDate, endDate) => getAvailableOffers(startDate, endDate)} availableOffers={props.availableOffers} />       
    );
}