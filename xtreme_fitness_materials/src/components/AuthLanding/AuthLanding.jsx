import React from "react";
import LoginHero from "./LoginHero";
import LoginPage from "./LoginPage";

const AuthLanding = ({ onLogin }) => {
  return (
    <>
      <LoginHero />
      <LoginPage onLogin={onLogin} />
    </>
  );
};

export default AuthLanding;
