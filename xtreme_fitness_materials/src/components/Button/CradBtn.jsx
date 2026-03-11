import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const CradBtn = ({ children, to, className, ...rest }) => {
  return (
    <>
      <Link
        to={to}
        {...rest}
        className={clsx(
          "flex items-center justify-center gap-2 md:gap-4",
          "bg-btn-badge py-2 px-6 rounded w-full text-center cursor-pointer",
          "font-normal text-secondary text-base md:text-lg",
          "rounded-[6.25rem]",
          "transition duration-300 ease-in-out",
          "hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#e54e41] hover:to-[#ff8a00]",
          className,
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default CradBtn;
