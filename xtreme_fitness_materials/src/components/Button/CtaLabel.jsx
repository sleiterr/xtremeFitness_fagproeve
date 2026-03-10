import React from "react";
import clsx from "clsx";
import { MdPlayArrow } from "react-icons/md";

const CtaLabel = ({ className }) => {
  return (
    <span
      className={clsx(
        "inline-flex h-7.75 w-10.5 md:h-12 md:w-16 items-center justify-center rounded-full",
        className,
      )}
      style={{ background: "var(--gradient-price-badge)" }}
    >
      <MdPlayArrow className="text-white text-3xl md:text-5xl" />
    </span>
  );
};

export default CtaLabel;
