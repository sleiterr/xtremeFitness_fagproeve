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
          "font-normal text-base text-secondary px-3 h-10 md:px-4 md:h-12",
          "rounded-3xl border border-white",
          "shadow focus:outline-none transition-shadow duration-300 focus:ring-2 focus:ring-cyan-400 resize-none",
        )}
      />
      <div className="min-h-8 mt-1 md:min-h-8">
        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
