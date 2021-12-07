import React from "react";
import BuyTicket from "../Ticket/BuyTicket";
import MainBanner from "./MainBanner/MainBanner";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <BuyTicket />
    </div>
  );
};

export default Home;
