import React from "react";
import Button from "../Button/PrimaryButton";
import CtaLabel from "../Button/CtaLabel";
import heroBg from "../../assets/Header/mainHeader.jpg";

// button mt-5
const heroText = [
  {
    id: 1,
    subject: "xtreme fitness",
    title: "Bliv stærk",
    desc: "Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen.",
    subjectClass:
      "font-normal font-teko text-secondary text-2xl md:text-4xl tracking-[7.5px] md:tracking-[8.5px] uppercase mb-2 md:mb-4",
    titleClass:
      "font-bold font-teko text-primary text-3xl md:text-6xl tracking-[1.2px] md:tracking-[1.4px] uppercase",
    descClass:
      "font-normal text-secondary text-xs md:text-xl text-center max-w-[260px] md:max-w-[360px]",
  },
];

const Hero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        // aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <HeroItem />
          <Button to="#" className="mt-12 md:mt-14">
            Tilmeld dig nu
            <CtaLabel />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroItem = () => {
  return (
    <div>
      {heroText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <h2 className={item.subjectClass}>{item.subject}</h2>
          <h1 className={item.titleClass}>{item.title}</h1>
          <p className={item.descClass}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
