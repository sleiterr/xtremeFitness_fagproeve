import React from "react";

const PageboardCard = ({ children }) => {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <div>{children}</div>
    </div>
  );
};

export default PageboardCard;
