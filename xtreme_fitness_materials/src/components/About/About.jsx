import React from "react";
import clsx from "clsx";
import aboutUs from "../../assets/about/about_us_background.jpg";
import StatsSection from "./StatsSection";
import aboutUsMobile from "../../assets/about/about_us2.png";
import Button from "../Button/PrimaryButton";
import CtaLabel from "../Button/CtaLabel";

const aboutText = [
  {
    id: 1,
    subject: " Om os",
    title: "Velkomen til Xtreme Fitness",
    text: "Xtreme Fitness er stedet, hvor sved, grin og god musik går hånd i hånd. Vi lover ikke mirakler - men vi lover, at du bliver stærkere, gladere og får ondt i muskler, du ikke vidste, du havde!",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:w-90 md:tracking-[1.4px] mx-auto w-70 md:w-90",
    textClass:
      "font-normal text-base md:text-lg text-center max-w-76.5 md:max-w-140 mx-auto",
    imageMobile: aboutUsMobile,
  },
];

const About = () => {
  return (
    <section
      className="relative w-full min-w-[320px] md:h-screen min-h-screen lg:h-auto 
  bg-no-repeat bg-right md:bg-center bg-length:[200%_100%] md:bg-cover md:aspect-8/5"
      id="about"
      style={{ backgroundImage: `url(${aboutUs})` }}
    >
      <div
        className={clsx(
          "w-full md:w-1/2 md:ml-auto px-0 md:px-6 py-10 md:py-32 md:max-w-7xl min-h-full",
          "flex flex-col text-center justify-center items-center md:items-center md:justify-center z-10",
        )}
      >
        <AboutItem />
        <StatsSection />
        <div className="flex items-center justify-center">
          <Button to="#" className="font-normal text-xs gap-6">
            Læs mere
            <CtaLabel className="w-12 h-auto" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

const AboutItem = () => {
  return (
    <>
      {aboutText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center mx-auto"
        >
          <img
            src={item.imageMobile}
            alt="about us mobile"
            className="block md:hidden w-75.25 h-auto object-cover mb-10"
          />
          <div className="">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
          <div className="mt-2">
            <p className={item.textClass}>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
