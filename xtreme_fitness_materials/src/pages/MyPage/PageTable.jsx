import React from "react";
import Section from "../../components/Section/Section";
import PageboardView from "./PageboardView";

const pageText = [
  {
    id: 1,
    subject: "Oversigt",
    title: "Mine Tilmeldinger",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-dark-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:tracking-[1.4px] mx-auto",
  },
];

const PageTable = () => {
  return (
    <Section className="px-4" id="#">
      <PageItem />
      <PageboardView />
    </Section>
  );
};

const PageItem = () => {
  return (
    <>
      {pageText.map((item) => (
        <div key={item.id} className="text-center mb-8">
          <div className="">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default PageTable;
