import React from "react";
import Section from "../Section/Section";
import ListServices from "./ListServices";

const servicesText = [
  {
    id: 1,
    subject: "Vores Tjenester",
    title: "Løsninger til at Bevæge sig bedre og føle sig sundere",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-secondary tracking-[4px] uppercase text-center",
    titleClass:
      "font-teko font-medium text-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:w-90 md:tracking-[1.4px] mx-auto w-88 md:w-[33rem] text-center mt-4",
  },
];

const Services = () => {
  return (
    <Section className="py-0!">
      <div
        className="py-14 md:py-32"
        style={{ background: "var(--gradient-price-badge)" }}
      >
        <ServicesItem />
      </div>
      <ListServices />
    </Section>
  );
};

export default Services;

const ServicesItem = () => {
  return (
    <>
      {servicesText.map((item) => (
        <div key={item.id}>
          <h4 className={item.subjectClass}>{item.subject}</h4>
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </>
  );
};
