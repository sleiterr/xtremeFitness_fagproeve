import React from "react";
import HeroSection from "../Section/HeroSection";
import loginBg from "../../assets/loginHeader/loginHeader.png";

// button mt-5
const loginText = [
  {
    id: 1,
    title: "Login",
    titleClass:
      "font-bold font-teko text-primary text-4xl md:text-6xl tracking-[1.2px] md:tracking-[1.4px] uppercase",
  },
];

const LoginHero = () => {
  return (
    <HeroSection bgSrc={loginBg}>
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <LoginItem />
      </div>
    </HeroSection>
  );
};

export default LoginHero;

const LoginItem = () => {
  return (
    <div>
      {loginText.map((item) => (
        <div key={item.id} className="text-center">
          <h1 className={item.titleClass}>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
