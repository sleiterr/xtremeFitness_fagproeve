import React from "react";
import Button from "../Button/PrimaryButton";
import heroBg from "../../assets/Header/mainHeader.jpg";

// button mt-5
const heroText = [
  {
    id: 1,
    subject: "xtreme fitness",
    title: "Bliv stærkr",
    desc: "Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen.",
    subjectClass:
      "font-normal font-teko text-secondary text-2xl tracking-[7.5px] uppercase mb-2",
    titleClass:
      "font-bold font-teko text-primary text-3xl tracking-[1.2px] uppercase",
    descClass: "font-normal text-secondary text-xs text-center max-w-[260px]",
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
          <Button to="#">Tilmeld dig nu</Button>
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
