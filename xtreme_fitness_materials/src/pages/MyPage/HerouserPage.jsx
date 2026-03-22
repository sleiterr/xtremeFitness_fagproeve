import React from "react";
import PageHeader from "../../assets/myPage/myPageHeader.png";
import HeroSection from "../../components/Section/HeroSection";

const usersText = [
  {
    id: 1,
    title: "Min side",
    titleClass:
      "font-teko font-medium text-primary text-3xl md:text-6xl uppercase mx-auto",
  },
];

const HerouserPage = () => {
  return (
    <div>
      <HeroSection bgSrc={PageHeader}>
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <UsersItem />
        </div>
      </HeroSection>
    </div>
  );
};

const UsersItem = () => {
  return (
    <>
      {usersText.map((item) => (
        <div key={item.id} className="text-center">
          <div className="">
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default HerouserPage;
