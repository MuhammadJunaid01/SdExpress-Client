import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Col, Button, Spinner } from "react-bootstrap";
import "./texiTicket.css";
const BuyTexiTicket = () => {
  const [texi, setTexi] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://glacial-savannah-62539.herokuapp.com/texiTicket")
      .then((res) => res.json())
      .then((data) => {
        setTexi(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log(texi);
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
      <div className="texiTicketInfo">
        <h3>Buy Your Texi Ticket</h3>
      </div>
      <Row>
        {texi?.map((texiTicket, index) => (
          <Col key={index} sm={12} md={3} lg={3}>
            <Card>
              <Card.Img variant="top" src={texiTicket?.image} />
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

export default BuyTexiTicket;
