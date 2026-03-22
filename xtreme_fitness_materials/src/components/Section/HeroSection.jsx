import React from "react";

const HeroSection = ({ children, className = "", style = {}, id, bgSrc }) => {
  return (
    <section
      className={`relative min-h-[45vh] w-full min-w-[320px] md:h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5 ${className}`}
      id={id}
      style={{
        backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
        backgroundPosition: "center center",
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default HeroSection;
