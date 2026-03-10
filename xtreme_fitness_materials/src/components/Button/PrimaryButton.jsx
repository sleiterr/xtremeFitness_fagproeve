import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const PrimaryButton = ({ children, to, ...rest }) => {
  return (
    <>
      <Link
        to={to}
        {...rest}
        className={clsx(
          "border-2 border-btn-border bg-transparent py-4 px-10 rounded w-full text-center cursor-pointer mt-12 md:mt-14",
          "font-zen font-medium text-secondary text-base md:text-2xl",
          "rounded-[6.25rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-white/20 hover:backdrop-blur-md hover:border-white/50",
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default PrimaryButton;
