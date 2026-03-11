import React from "react";
import clsx from "clsx";
import contact from "../../assets/contact/contact_us_background.jpg";
import contactMobile from "../../assets/contact/contact_us.png";
import ContactForm from "./ContactForm";

const contactText = [
  {
    id: 1,
    subject: "Kontakt os",
    title: "Send os en besked og vi svarer hurtigt muligt",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:w-[420px] md:tracking-[1.4px] mx-auto w-70 md:w-90",
    imageMobile: contactMobile,
  },
];

const ContactSection = () => {
  return (
    <section
      className="relative w-full min-w-[320px] min-h-screen bg-no-repeat bg-cover bg-center"
      id="contact"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div
        className={clsx(
          "w-full md:w-1/2 md:ml-auto px-0 md:px-6 py-10 md:py-32 md:max-w-7xl min-h-full",
          "flex flex-col text-center justify-center items-center md:items-center md:justify-center z-10",
        )}
      >
        <ContactItem />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;

const ContactItem = () => {
  return (
    <>
      {contactText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center mx-auto"
        >
          <img
            src={item.imageMobile}
            alt="contact us mobile"
            className="block md:hidden w-75.25 h-auto object-cover mb-10"
          />
          <div className="">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};
