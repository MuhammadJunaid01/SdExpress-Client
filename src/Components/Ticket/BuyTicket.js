import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BuycarTicket from "./buyCarTicket/BuycarTicket";
import "./buyticket.css";
import BuyBoatTicket from "./buyBoatTicket/BuyBoatTicket";
import BuyTexiTicket from "./buyTexiTicket/BuyTexiTicket";
const BuyTicket = () => {
  const { path, url } = useRouteMatch();
  return (
    <Container>
      <div className="buyTickitInfo">
        <h1>Book Your Ticket</h1>
      </div>
      <div className="buyTicketContainer">
        <Row>
          <Col sm={12} md={4}>
            <Link className="nestedLink" to={`${url}/buyCarTicket`}>
              Buy Car Ticket
            </Link>
            <Link className="nestedLink" to={`${url}/buyBoatTicket`}>
              Buy Boat Ticket
            </Link>
            <Link className="nestedLink" to={`${url}/buyTexiTicket`}>
              Buy Texi Ticket
            </Link>
          </Col>
          <Col sm={12} md={8}>
            <Switch>
              <Route exact path={path}>
                <BuycarTicket />
              </Route>
              <Route path={`${path}/buyCarTicket`}>
                <BuycarTicket />
              </Route>
              <Route path={`${path}/buyBoatTicket`}>
                <BuyBoatTicket />
              </Route>
              <Route path={`${path}/buyTexiTicket`}>
                <BuyTexiTicket />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BuyTicket;
