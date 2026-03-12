import React from "react";
import { ContactFooter } from "./ContactFooter";
import clsx from "clsx";

import LogoFooter from "./LogoFooter";
import { LinkWrapper } from "./LinkWrapper";

const Footer = () => {
  return (
    //  border-t border-white
    <footer className="flex flex-col items-center justify-center bg-footer">
      <div
        className={clsx(
          "flex items-center flex-col gap-8 justify-between w-full py-6 px-8  md:py-10 md:px-20",
          "md:gap-0 md:flex-row md:items-center md:py-8",
        )}
      >
        <div className="flex flex-col items-center md:items-start justify-center">
          <LogoFooter />
        </div>

        <LinkWrapper />

        <div className="flex flex-col md:items-end gap-2">
          <ContactFooter />
        </div>
      </div>
      <div
        className={clsx(
          "relative grid place-items-center py-4 md:py-2 md:w-1/3 px-8 md:px-0 w-full",
          "before:content-[''] before:absolute before:top-1 before:w-[90%] md:before:w-full before:h-[1px] before:bg-zinc-600 before:-translate-y-1/2",
        )}
      >
        <p className="flex items-center gap-4 font-light text-xs text-secondary-footer tracking-wider text-center py-2 md:py-4">
          Copyright 2025 xtremefitness.dk - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
