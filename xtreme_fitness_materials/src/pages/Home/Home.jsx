import React from "react";
import Hero from "../../components/Hero/Hero";
import Exercises from "../../components/Exercises/Exercises";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Subscription from "../../components/Subscription/Subscription";
import Employers from "../../components/Employers/Employers";
import ContactSection from "../../components/Contact/ContactSection";
import News from "../../components/News/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Exercises />
      <About />
      <Services />
      <Testimonials />
      <Subscription />
      <Employers />
      <ContactSection />
      <News />
    </>
  );
};

export default Home;
