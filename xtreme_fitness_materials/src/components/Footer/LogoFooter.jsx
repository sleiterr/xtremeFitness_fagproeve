import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import logo from "../../assets/logo/logo.png";

const LogoFooter = ({ scrollTarget = "hero" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      scroller.scrollTo(scrollTarget, {
        smooth: true,
        duration: 250,
      });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <img
        src={logo}
        alt="logo"
        onClick={handleClick}
        className="w-40 h-full cursor-pointer"
      />
      <p className="font-light text-sm md:text-base text-secondary-footer mt-3 md:mt-4 w-[220px]">
        Hos os handler træning om glæde, kvalitet og resultater{" "}
      </p>
    </>
  );
};

export default LogoFooter;
