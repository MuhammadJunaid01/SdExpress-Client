import React, { useEffect, useState } from "react";
import "./buyhondaTicket.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card, Button, Spinner } from "react-bootstrap";
const BuyHondaTicket = () => {
  const [hondaTickets, setHondaTickets] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/motorBikeTicket")
      .then((res) => res.json())
      .then((data) => {
        setHondaTickets(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return loader ? (
    <div style={{ textAlign: "center" }}>
      <Spinner
        style={{ padding: "20px" }}
        animation="border"
        variant="warning"
      />
    </div>
  ) : (
    <div>
      <div className="hondaTicketinfo">
        <h3>Buy Your Honda Ticket</h3>
      </div>
      <Row>
        {hondaTickets?.map((hondaTicket, index) => (
          <Col key={index} sm={12} md={3} lg={3}>
            <Card>
              <Card.Img variant="top" src={hondaTicket?.image} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BuyHondaTicket;
