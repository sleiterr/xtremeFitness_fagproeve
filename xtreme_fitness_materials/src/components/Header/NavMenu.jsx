import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick, isLoggedIn, onLogout }) => {
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
        {isLoggedIn ? (
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
                  handleLinkClick;
                }}
              >
                Dashboard
              </Link>
            </li>
          </>
        ) : (
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
      </ul>
    </div>
  );
};

export default NavMenu;
