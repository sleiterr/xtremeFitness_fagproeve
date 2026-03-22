import React from "react";
import clsx from "clsx";

const AbonnementTableHeader = ({ align = "left", children }) => {
  return (
    <th
      className={clsx(
        "py-2 px-5 text-xs md:text-sm font-medium",
        `text-${align}`,
        "bg-form-bg",
      )}
    >
      {children}
    </th>
  );
};

export default AbonnementTableHeader;
