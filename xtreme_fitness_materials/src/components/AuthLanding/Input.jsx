import React from "react";
import clsx from "clsx";

const Input = ({ name, error, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        id={name}
        name={name}
        {...rest}
        className={clsx(
          "font-normal text-base text-input-custom px-3 h-12 md:px-4 md:h-12",
          "bg-white rounded-3xl border border-form-border",
          "shadow focus:outline-none transition-shadow duration-300 focus:ring-1 focus:ring-focus-border resize-none",
        )}
      />
      <div className="min-h-8 mt-1 md:min-h-8">
        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
