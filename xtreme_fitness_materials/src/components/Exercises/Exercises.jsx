import React from "react";
import clsx from "clsx";
import Section from "../Section/Section";
import { useExercises } from "./useExercises";

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
  const { exercises, loading, error } = useExercises();

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;
  return (
    <Section>
      <ExercisesItem />
      <ul
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16",
        )}
      >
        {exercises.map((item, index) => (
          <li
            key={index}
            className="font-normal text-lg text-dark-secondary text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-21.5 h-auto md:w-20 md:h-auto object-contain mx-auto mb-4 md:mb-6"
            />
            <div className="">
              <h4 className="font-medium text-2xl text-dark-secondary mb-2">
                {item.title}
              </h4>
              <p
                className={clsx(
                  "font-normal text-xs md:text-base text-dark-slider",
                  "max-w-58.25 md:max-w-90 mx-auto",
                )}
              >
                {item.teaser}
              </p>
            </div>
          </li>
        ))}
      </ul>
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
