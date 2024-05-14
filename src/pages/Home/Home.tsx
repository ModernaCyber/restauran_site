import React from "react";
import Hero from "../../components/home/hero/Hero";
import Welcome from "../../components/home/introduction/Welcome";
import Menu from "../../components/home/menu/Menu";
import Offer from "../../components/home/offer/Offer";
import Testimonial from "../../components/home/testimonial/Testimonial";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Menu />
      <Offer/>
      <Testimonial/>
    </>
  );
};

export default Home;
