import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Col, Button } from "react-bootstrap";

const BuyTexiTicket = () => {
  const [texi, setTexi] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/texiTicket")
      .then((res) => res.json())
      .then((data) => {
        setTexi(data);
      });
  }, []);
  console.log(texi);
  return (
    <div>
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
