import React from "react";
import Section from "../Section/Section";
import NewsEvent from "./NewsEvent";

const newsText = [
  {
    id: 1,
    subject: "Vores Nyheder",
    title: "Seneste Blogindlæg",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-dark-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:tracking-[1.4px] mx-auto",
  },
];

const News = () => {
  return (
    <Section className="px-4">
      <NewsItem />
      <NewsEvent />
    </Section>
  );
};

const NewsItem = () => {
  return (
    <>
      {newsText.map((item) => (
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

export default News;
