import React from "react";

const contactData = [
  {
    id: 1,
    href: "mailto:info@xtremefitness.dk",
    text: "info@xtremefitness.dk",
    className: "font-normal text-sm md:text-base text-secondary-footer",
  },
  {
    id: 2,
    href: "tel:+45 99 75 16 42",
    text: "+ 45 99 75 16 42",
    className: "font-normal text-sm md:text-base text-secondary-footer",
  },
];

export const ContactFooter = () => {
  return (
    <>
      <h4 className="font-teko font-normal text-2xl md:text-3xl">Kontakt os</h4>
      <ul className="flex flex-col items-start lg:flex-row lg:items-center justify-center gap-2 lg:gap-6">
        {contactData.map((item) => (
          <li key={item.id} className={item.className}>
            <a
              href={item.href}
              className="footer-link font-light text-lg tracking-wide text-content"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
