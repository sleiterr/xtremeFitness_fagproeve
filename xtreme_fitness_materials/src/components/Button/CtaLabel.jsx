import React from "react";
import { MdPlayArrow } from "react-icons/md";

const CtaLabel = () => {
  return (
    <span className="flex items-center justify-center gap-4 md:gap-6">
      Tilmeld dig nu
      <span
        className="inline-flex h-7.75 w-10.5 md:h-12 md:w-16 items-center justify-center rounded-full"
        style={{ background: "var(--gradient-price-badge)" }}
      >
        <MdPlayArrow className="text-white text-3xl md:text-5xl" />
      </span>
    </span>
  );
};

export default CtaLabel;
