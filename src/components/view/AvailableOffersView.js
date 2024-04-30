import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import OfferCard from './OfferCard';


export default function AvailableOffersView(props) {
const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const offersToDisplay = props.availableOffers;

  function setDescription(roomType){
    let description = {desc: "", image: ""};
    switch(roomType){
        case "SINGLE":
          case "SINGLE":
            description.desc = "Chambre simple: Chambre spacieuse avec un lit simple, idéale pour une personne seule.";
            description.image = "http://www.francelouvre.com/usermedia/photo-636161114805544077-1.jpg?dummy=0&crop=True&w=1600&h=765";
            break;
          case "DOUBLE":
            description.desc = "Chambre double: Chambre spacieuse avec un lit double, idéale pour un couple.";
            description.image = "https://lavillaenlile.com/usermedia/photo-637604964372531336-2.jpg?dummy=0&crop=true&w=1350&h=520";
            break;
          case "SUITE":
            description.desc = "Suite: Chambre spacieuse avec un lit double, idéale pour un couple. La suite dispose d'un salon privé.";
            description.image = "https://static.cms.yp.ca/ecms/media/2/iStock_000007428613_Medium-1-1427732378-600x360.jpg";
            break;
          case "FAMILY":
            description.desc = "Chambre familiale: Chambre spacieuse avec un lit double et deux lits simples, avec possibilité de rajouter un couchage supplémentaire.";
            description.image = "https://www.hotel-ambassadeurs.fr/wp-content/uploads/2020/11/big-family-hotel-rooms1.jpg";
            break;

          case "PRESIDENTIAL":
            description.desc = "Suite présidentielle: Chambre spacieuse avec un lit double, idéale pour un couple. La suite dispose d'un salon privé, d'une salle de bain avec jacuzzi et d'une terrasse privée.";
            description.image = "https://www.touschezmickey.com/wp-content/uploads/2023/04/suite-presidentielle-hotel-new-york-marvel.webp";
            break;
          default:
            description.desc = "Chambre simple: Chambre spacieuse avec un lit simple, idéale pour une personne seule.";
            description.image = "http://www.francelouvre.com/usermedia/photo-636161114805544077-1.jpg?dummy=0&crop=True&w=1600&h=765";
            break;
    }
    return description;

      
    }
  

  function displayOffers(){
    let offersToDisplay = props.availableOffers;
    offersToDisplay = offersToDisplay.filter(offer => offer.capacity >= numberOfPeople);
    if(offersToDisplay.length === 0){
      return <p>Aucune offre disponible pour ces dates</p>
    }else{
      return offersToDisplay.map((offer) => {
        return (
          <div>
            <OfferCard className="p-5"
            key={offer.offerId}
            offer={offer}
            startDate={startDate}
            endDate={endDate}
            nightlyRate={offer.nightlyRate}
            description={setDescription(offer.roomType)}
            selectedOffer={props.selectedOffer}
            setSelectedOffer={(data) => props.setSelectedOffer(data)}
          />
          </div>
          
          
        );
      });
    }
  }

  useEffect(() => {
    if (!startDate) {
      setEndDate(null);
    }
  }, [startDate]);

  

  return (
    <div className="container">
      <Form>
        <Container className="d-flex justify-content-center p-3 pt-5">
        <Row className="w-100">
        <Col md={3}>
          <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          className="form-control"
          placeholderText="Début de séjour"
          isClearable={true} // permet de rendre la date effaçable
          />
          </Col>

          <Col md={3}>
          <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate} // empêche la sélection d'une date antérieure à la startDate
          dateFormat="dd/MM/yyyy"
          className="form-control"
          placeholderText="Fin de séjour"
          isClearable={true} // permet de rendre la date effaçable
          disabled={!startDate} // désactive le choix de la endDate si la startDate n'est pas définie
          />
          </Col>
          <Col md={2}>
          <Form.Select
          aria-label="Nombre de personnes"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          className="mx-2" // Ajouter un peu d'espace entre les éléments
        >
          {/* Générer les options pour le nombre de personnes */}
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} personne(s)
            </option>
          ))}
        </Form.Select>
        </Col>
            
        <Col md={2}>
          <Button variant="primary" onClick= {() => props.getAvailableOffers(startDate,endDate)}>
                Rechercher disponibilité
          </Button>
          </Col>
          </Row>
        </Container>
      </Form>

      <Container className="p-3">
          {displayOffers()}
      </Container>
    </div>
  );
}