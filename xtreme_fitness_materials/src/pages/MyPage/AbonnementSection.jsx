import React from "react";
import TableImg from "../../assets/myPage/table_img.png";
import Section from "../../components/Section/Section";

const subText = [
  {
    id: 1,
    subject: "Abonnement",
    title: "Mit Abonnement",
    element: <img src={TableImg} alt="TableImg" className="w-20 h-auto mb-2" />,
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-dark-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:tracking-[1.4px] mx-auto",
  },
];

const AbonnementSection = () => {
  return (
    <Section className="px-4" id="#">
      <SubItem />
    </Section>
  );
};

const SubItem = () => {
  return (
    <>
      {subText.map((item) => (
        <div key={item.id} className="text-center">
          <div className="">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
          <div className="">
            <img
              src={TableImg}
              alt="TableImg"
              className="w-full h-auto mt-8 md:mt-10 object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AbonnementSection;
