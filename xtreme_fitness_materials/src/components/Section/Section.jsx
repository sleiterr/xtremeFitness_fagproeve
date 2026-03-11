import React from "react";

const Section = ({ children, className = "", style = {} }) => {
  return (
    <section className="flex items-center justify-center" style={style}>
      <div
        className={`w-full py-32 px-0 md:px-0 mx-auto md:max-w-7xl ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
