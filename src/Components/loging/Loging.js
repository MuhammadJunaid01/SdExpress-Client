import React from "react";
import "./login.css";
import loginimage from "../../images/images.png";
import { Row, Col, Button, Container } from "react-bootstrap";
import UsefireBase from "./../../coustomHook/useFirebase/UsefireBase";
import UseAuth from "./../../coustomHook/useAuth/UseAuth";
const Loging = () => {
  const { googleSign, user } = UseAuth();
  console.log("user", user);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={8} lg={8}>
            <img className="loginImage" src={loginimage} alt="" />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Button onClick={googleSign} variant="warning">
              Signup With Google
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Loging;
