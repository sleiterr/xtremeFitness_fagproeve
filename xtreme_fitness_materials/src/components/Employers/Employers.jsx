import React from "react";
import EmployersCard from "./EmployersCard";
import Section from "../Section/Section";

const employersText = [
  {
    id: 1,
    subject: "Trænere",
    title: "Vores Hold af Eksperter",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-secondary tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-secondary text-3xl md:text-5xl tracking-[1.2px] uppercase md:tracking-[1.4px] mx-auto",
  },
];

const Employers = () => {
  return (
    <Section id="employers" style={{ background: "var(--gradient-price-badge)" }}>
      <EmployersItem />
      <EmployersCard />
    </Section>
  );
};

const EmployersItem = () => {
  return (
    <>
      {employersText.map((item) => (
        <div key={item.id} className="text-center">
          <div className="">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Employers;
