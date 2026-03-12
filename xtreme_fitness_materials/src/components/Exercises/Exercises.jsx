import React from "react";
import Section from "../Section/Section";
import ExercisesList from "./ExercisesList";

const exercisesText = [
  {
    id: 1,
    subject: "Dette Tilbyder vi",
    title: "Vi Tilbyder eksklusive øvelser",
    subjectClass:
      "font-normal font-teko text-text-slogan text-base md:text-4xl tracking-[4.2px] md:tracking-[8.5px] uppercase mb-4 md:mb-6",
    titleClass:
      "font-bold font-teko text-dark-primary text-3xl leading-9 md:text-6xl uppercase text-center",
  },
];

const Exercises = () => {
  return (
    <Section>
      <ExercisesItem />
      <ExercisesList />
    </Section>
  );
};

export default Exercises;

const ExercisesItem = () => {
  return (
    <>
      {exercisesText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center mb-10 md:mb-16"
        >
          <h4 className={item.subjectClass}>{item.subject}</h4>
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </>
  );
};
