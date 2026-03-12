import React from "react";
import Section from "../Section/Section";
import LoginForm from "./LoginForm";

const pageText = [
  {
    id: 1,
    subject: "Log ind for at tilmelde dig en træning",
    title: "Log ind",
    titleClass:
      "font-teko font-medium text-dark-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:tracking-[1.4px] mx-auto",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4 w-[190px] md:w-[280px]",
  },
];

const LoginPage = ({ onLogin }) => {
  return (
    <Section>
      <NewsItem />
      <LoginForm onLogin={onLogin} />
    </Section>
  );
};

const NewsItem = () => {
  return (
    <>
      {pageText.map((item) => (
        <div key={item.id} className="text-center mb-6 md:mb-12">
          <div className="flex flex-col items-center justify-center">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoginPage;
