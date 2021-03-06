import React, { useEffect, useState } from "react";
import { Spinner, Row, Col, Card, Button } from "react-bootstrap";
import "./boatTicket.css";
const BuyBoatTicket = () => {
  const [boatTickets, setBoatTickets] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/boatTicket")
      .then((res) => res.json())
      .then((data) => {
        setBoatTickets(data);
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
      <div className="BoatTicketInfo">
        <h3>Buy Your Boat Ticket</h3>
      </div>
      <Row>
        {boatTickets?.map((boatTicket, index) => (
          <Col key={index} sm={12} md={3} lg={3}>
            <Card>
              <Card.Img
                className="boatTicketimage"
                variant="top"
                src={boatTicket?.image}
              />
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

export default BuyBoatTicket;
