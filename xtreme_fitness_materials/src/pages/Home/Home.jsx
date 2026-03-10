import React from "react";
import Hero from "../../components/Hero/Hero";
import Exercises from "../../components/Exercises/Exercises";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Exercises />
      <About />
      <Services />
    </>
  );
};

export default Home;
