import React from "react";

const contactData = [
  {
    id: 1,
    title: "Adresse:",
    text: "Nørregade 42, 9000 Aalborg",
    titleClass: "font-normal text-base text-primary-footer text-center",
    textClass: "font-normal text-sm md:text-base text-tertiary-footer",
  },
  {
    id: 2,
    title: "Email:",
    href: "mailto:info@xtremefitness.dk",
    text: "info@xtremefitness.dk",
    titleClass: "font-normal text-base text-primary-footer text-center",
    textClass: "font-normal text-sm md:text-base text-tertiary-footer",
  },
  {
    id: 3,
    title: "Telefon:",
    href: "tel:+45 99 75 16 42",
    text: "+ 45 99 75 16 42",
    titleClass: "font-normal text-base text-primary-footer text-center",
    textClass: "font-normal text-sm md:text-base text-tertiary-footer",
  },
];

export const ContactFooter = () => {
  return (
    <>
      <h4 className="font-teko font-normal text-2xl md:text-3xl text-center">
        Kontakt os
      </h4>
      <ul className="flex flex-col items-center lg:flex-col lg:items-end justify-center gap-2 lg:gap-6">
        {contactData.map((item) => (
          <li key={item.id} className="flex flex-col md:items-end">
            <p className={item.titleClass}>{item.title}</p>
            <a href={item.href} className={item.textClass}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
