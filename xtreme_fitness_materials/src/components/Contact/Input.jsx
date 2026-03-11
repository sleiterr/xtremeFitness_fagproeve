import React from "react";
import clsx from "clsx";
import { Field, ErrorMessage } from "formik";

const InputField = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <Field
        id={name}
        name={name}
        {...rest}
        className={clsx(
          "font-normal text-base text-input-custom px-3 h-12 md:px-4 md:h-12",
          "bg-white rounded-3xl border border-white",
          "shadow focus:outline-none transition-shadow duration-300 focus:ring-2 focus:ring-form-border resize-none",
        )}
      />
      <div className="min-h-8 mt-2 md:min-h-8">
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default InputField;
