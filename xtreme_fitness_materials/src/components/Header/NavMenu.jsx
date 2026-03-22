import React from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick, isLoggedIn, token }) => {
  const role = token ? jwtDecode(token).role : null;

  return (
    <div>
      <ul className="flex flex-col items-end gap-6">
        <li>
          <a
            href="#exercises"
            smooth={true.toString()}
            duration={800}
            className={clsx(
              "relativeking-wide cursor-pointer",
              "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-bold transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Tjenester
          </a>
        </li>
        <li>
          <a
            href="#about"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-bold transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Om os
          </a>
        </li>
        <li className="hidden md:block">
          <a
            href="#price"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-bold transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Priser
          </a>
        </li>
        <li>
          <a
            href="#employers"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-bold transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Trænere
          </a>
        </li>
        {isLoggedIn && role === "admin" && (
          <>
            <li>
              <Link
                to="/backoffice"
                smooth={true.toString()}
                duration={800}
                offset={-100}
                className={clsx(
                  "relative cursor-pointer ",
                  "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
                  "hover:font-bold transition-all duration-300",
                )}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                Dashboard
              </Link>
            </li>
          </>
        )}
        {isLoggedIn && role === "member" && (
          <>
            <li>
              <Link
                to="/my-page"
                smooth={true.toString()}
                duration={800}
                offset={-100}
                className={clsx(
                  "relative cursor-pointer ",
                  "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
                  "hover:font-bold transition-all duration-300",
                )}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                My Page
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Link
              to="/auth-landing"
              smooth={true.toString()}
              duration={800}
              offset={-100}
              className={clsx(
                "relative cursor-pointer ",
                "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
                "hover:font-bold transition-all duration-300",
              )}
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link
              to="/auth-landing"
              smooth={true.toString()}
              duration={800}
              offset={-100}
              className={clsx(
                "relative cursor-pointer ",
                "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
                "hover:font-bold transition-all duration-300",
              )}
              onClick={handleLinkClick}
            >
              Log out
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
