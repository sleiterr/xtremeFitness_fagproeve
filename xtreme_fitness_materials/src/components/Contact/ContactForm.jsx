import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import TextareaField from "./TextareaField";
import CtaLabel from "../Button/CtaLabel";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const ContactForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Navn er påkrævet"),
    phone: Yup.string().required("Telefonnummer er påkrævet"),
    email: Yup.string().email("Ugyldig email").required("Email på påkrævet"),
    subject: Yup.string().required("Skriv venligst din emne"),
    message: Yup.string().required("Skriv venligst din besked"),
  });

  const handleSubmit = async (values, { resetForm }) => {

    try {
      const res = await fetch(`${API_URL}/message`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        // toast.success(`Tak ${values.name}, din besked er sendt!`);
        resetForm();
        navigate("/contact-confirmation", { state: { name: values.name } });
      } else {
        console.error(data.message || "Noget gik galt, prøv igen");
        // toast.error(values.message || "Noget gik galt, prøv igen");
      }
    } catch (err) {
      console.error(err);
      console.error("Noget gik galt, prøv igen");
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="max-w-xs md:max-w-lg w-full mx-auto mt-8 md:mt-12">
          <div className="flex flex-col items-center">
            <Input
              name="name"
              placeholder="Navn"
              value={values.name}
              onChange={(e) => setFieldValue("name", e.target.value)}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Telefon"
              value={values.phone}
              onChange={(e) => setFieldValue("phone", e.target.value)}
            />
            <Input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <Input
              name="subject"
              placeholder="Emne"
              value={values.subject}
              onChange={(e) => setFieldValue("subject", e.target.value)}
            />
            <TextareaField
              name="message"
              placeholder="Besked"
              value={values.message}
              onChange={(e) => setFieldValue("message", e.target.value)}
              rows={6}
            />
          </div>
          <SendButton type="submit">
            Send
            <CtaLabel />
          </SendButton>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

const SendButton = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="submit"
        {...rest}
        className={clsx(
          "flex items-center justify-center gap-6 md:gap-8 mx-auto mt-8 w-full",
          "border-2 border-btn-border bg-transparent py-4 md:py-2 px-14 md:px-12 rounded text-center cursor-pointer",
          "font-medium text-secondary text-xl md:text-2xl",
          "rounded-[6.25rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-white/20 hover:backdrop-blur-md hover:border-white/50",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};
