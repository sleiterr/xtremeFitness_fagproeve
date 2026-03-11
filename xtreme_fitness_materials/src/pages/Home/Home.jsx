import React from "react";
import Hero from "../../components/Hero/Hero";
import Exercises from "../../components/Exercises/Exercises";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Subscription from "../../components/Subscription/Subscription";

const Home = () => {
  return (
    <>
      <Hero />
      <Exercises />
      <About />
      <Services />
      <Testimonials />
      <Subscription />
    </>
  );
};

export default Home;
