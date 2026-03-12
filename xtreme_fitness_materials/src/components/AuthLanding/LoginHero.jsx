import React from "react";
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
    <section
      className="relative min-h-[45vh] w-full min-w-[320px] md:h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="login-hero"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: "center center",
        // aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <LoginItem />
      </div>
    </section>
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
