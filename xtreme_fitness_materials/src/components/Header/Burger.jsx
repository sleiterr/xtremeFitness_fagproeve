import React from "react";
import styled from "styled-components";

const Burger = ({ isOpen, toggleMenu, scrolled }) => {
  //   const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledWrapper $isOpen={isOpen} $scrolled={scrolled}>
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          id="burger"
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 25px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    position: absolute;
    display: block;
    height: 3px;
    width: 100%;
    background: white; /* завжди білий */
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 250ms ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    bottom: 0;
    transform-origin: left center;
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);

    top: 0;
    left: 4px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 30px;
    left: 5px;
  }
`;

export default Burger;
