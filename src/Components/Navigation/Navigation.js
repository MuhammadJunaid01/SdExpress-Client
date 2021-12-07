import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";
import UsefireBase from "./../../coustomHook/useFirebase/UsefireBase";

const Navigation = () => {
  const { user, logOut } = UsefireBase();
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#" style={{ color: "white" }}>
            SDexpress
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link" to="/home">
                HOME
              </Link>
              <Link className="link" to="/about">
                ABOUT
              </Link>
              <Link className="link" to="/services">
                SERVICES
              </Link>
              <Link className="link" to="/contact">
                CONTACT
              </Link>
              <Link className="link" to="/review">
                REVEIW
              </Link>
              {user?.email ? (
                <Link onClick={logOut} className="link" to="">
                  LOGOUT
                </Link>
              ) : (
                <Link className="link" to="/loging">
                  LOGING
                </Link>
              )}
            </Nav>
            {user?.email && (
              <img className="userImage" src={user?.photoURL} alt="" />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
