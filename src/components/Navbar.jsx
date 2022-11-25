import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { navLinks } from "../data";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="primary-header | container" data-overlay={isNavOpen}>
      <img src={logo} alt="Logo" />

      <button
        className="mobile-nav-toggle"
        aria-expanded={isNavOpen}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav className="primary-nav" data-expanded={isNavOpen}>
        <ul className="primary-nav__list flex">
          {navLinks.map((navLink) => {
            const { link, goesTo } = navLink;
            return (
              <li className="primary-nav__item" key={link}>
                <a href={goesTo} className="primary-nav__link">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
