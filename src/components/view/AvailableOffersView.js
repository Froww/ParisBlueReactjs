import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function AvailableOffersView(props) {
const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSearch = () => {
    // Vous pourriez appeler une fonction ici pour rechercher la disponibilité avec les dates
    console.log(startDate, endDate);
    // props.onSearchAvailability(startDate, endDate);
  };

  return (
    <div className="container">
      <Form>
        <Container className="d-flex justify-content-center p-3 pt-5">
          
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              placeholderText="Début de séjour"
            />
          
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              placeholderText="Fin de séjour"
            />
          
          
            <Button variant="primary" onClick= {() => props.getAvailableOffers(startDate,endDate)}>
              Rechercher disponibilité
            </Button>
          
        </Container>
      </Form>
    </div>
  );
}