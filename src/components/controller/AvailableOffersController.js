import React from "react";
import AvailableOffersView from "../view/AvailableOffersView";
import { useState } from "react";
import { formatDate } from '../Util';
export default function AvailableOffersController(props) {

    props.setSelectedOffer(null);

      

    function getAvailableOffers(startDate, endDate){
        startDate = formatDate(startDate);
        endDate = formatDate(endDate);
        console.log(startDate, endDate);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({startDate: startDate, endDate: endDate})
        };
        console.log(requestOptions);
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
        <AvailableOffersView getAvailableOffers={(startDate, endDate) => getAvailableOffers(startDate, endDate)}
         availableOffers={props.availableOffers} selectedOffer={props.selectedOffer}
        setSelectedOffer = {(data) => props.setSelectedOffer(data)} />       
    );
}