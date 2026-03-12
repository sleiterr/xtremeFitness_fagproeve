import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const wrapperData = [
  {
    id: 1,
    href: "#",
    className: "icon icon-facebook",
    icon: (
      <FaFacebookF className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]text-white" />
    ),
  },
  {
    id: 2,
    href: "#",
    className: "icon icon-twitter",
    icon: (
      <FaTwitter className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]text-white" />
    ),
  },
  {
    id: 3,
    href: "#",
    className: "icon icon-instagram",
    icon: (
      <FaInstagram className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]text-white" />
    ),
  },
];

export const LinkWrapper = () => {
  return (
    <StyledWrapper>
      <ul className="container">
        {wrapperData.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <a
              href={item.href}
              target="_blank"
              className={item.className}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    column-gap: 28px;
  }

  .icon {
    display: inline-flex;
    width: 60px;
    height: 60px;
    text-decoration: none;
    outline: 2px solid white;
    border-radius: 50%;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: 0.25s;
    color: white;
  }
  @media (max-width: 425px) {
    .icon {
      outline: none;
      background-color: rgba(119, 119, 119, 0.45);
      color: white;
    }
    .icon svg {
      color: white;
    }
  }

  .icon:hover {
    outline-offset: 4px;
  }

  .icon svg {
    margin: auto;
    width: 31px;
  }

  .icon-facebook:hover {
    background-color: #1877f2; /* Facebook blue */
    outline-color: #1877f2;
  }

  .icon-twitter:hover {
    background-color: #1da1f2; /* Twitter blue */
    outline-color: #1da1f2;
  }

  .icon-instagram:hover {
    background-color: #e1306c; /* Instagram pink */
    outline-color: #e1306c;
  }

  .icon:hover svg {
    animation: shake 0.25s;
  }

  @keyframes shake {
    10% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(-15deg);
    }
  }
`;
