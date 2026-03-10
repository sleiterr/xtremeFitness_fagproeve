import React from "react";

const Section = ({ children }) => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-full px-0 md:px-0 py-32 mx-auto md:max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
