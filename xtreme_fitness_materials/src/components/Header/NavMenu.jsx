import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick, isLoggedIn, onLogout }) => {
  return (
    <div>
      <ul className="flex flex-col items-end gap-6">
        <li>
          <Link
            to="/"
            smooth={true.toString()}
            duration={800}
            className={clsx(
              "relativeking-wide cursor-pointer",
              "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-bold transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Trænere
          </Link>
        </li>
        <li>
          <Link
            to="/stay"
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
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            to="/contact-form"
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
          </Link>
        </li>
        <li>
          <Link
            to="/activities"
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
            Log ind
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                to="/my-list"
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
                Min liste
              </Link>
            </li>
            <li>
              <button
                className={clsx(
                  "relative cursor-pointer ",
                  "font-zen font-light text-secondary text-2xl md:text-4xl tracking-wide",
                  "hover:font-bold transition-all duration-300",
                )}
                onClick={() => {
                  onLogout();
                }}
              >
                Log ud
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login-page"
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
