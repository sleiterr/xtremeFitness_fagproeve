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
          "border-2 border-white bg-transparent py-8 px-32 rounded w-full cursor-pointer mt-14",
          "font-zen font-normal text-secondary text-5xl",
          "rounded-br-[3.125rem] rounded-tl-[3.125rem]",
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
