import React from "react";
import { useLocation } from "react-router-dom";
import SecondaryBut from "../Button/SecondaryBut";
import clsx from "clsx";

const ContactConfirmation = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <section
      className={clsx("flex items-center justify-center", "h-screen")}
      style={{ background: "var(--gradient-price-badge)" }}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-12">
          <BoxText name={name} />
          <SecondaryBut
            to="/"
            className="self-center py-2 px-16 text-xl md:text-4xl md:py-4 md:px-34 mt-0!"
          >
            Tilbage
          </SecondaryBut>
        </div>
      </div>
    </section>
  );
};

export default ContactConfirmation;

const BoxText = ({ name }) => {
  const confirmText = [
    {
      id: 1,
      title: `Hej ${
        name || "ven"
      }, Tak for din besked! Du hører fra os snarest.`,
      titleClass:
        "font-normal text-primary text-4xl md:text-4xl text-center leading-[1.2] mb-2 max-w-[16rem] sm:max-w-lg md:max-w-[470px] mx-auto",
    },
  ];

  return (
    <div>
      {confirmText.map((item) => (
        <div key={item.id} className="">
          {item.element}
          <p className={item.titleClass}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
