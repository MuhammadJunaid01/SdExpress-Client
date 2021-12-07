import React, { useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "./mainBanner.css";
const MainBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="mainBannerContainer">
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 bannerimage"
              src="https://images.unsplash.com/photo-1572386942986-0e1e14f3a222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <Button variant="success">Booking Car Ticket</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 bannerimage"
              src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <Button variant="warning">Booking Boot Ticket</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 bannerimage"
              src="https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Button variant="info">Booking Bike Ticket</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default MainBanner;
