/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const Navbar = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const [scrollFlag, setScrollFlag] = useState<boolean>(false);
  const navbarItemList = [
    {
      id: "services",
      label: "Serveis",
    },
    {
      id: "whoWeAre",
      label: "Qui som",
    },
    {
      id: "biodiversity",
      label: "Biodiversitat",
    },
    {
      id: "contact",
      label: "Contacte",
    },
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrollFlag(true);
      } else {
        setScrollFlag(false);
      }
    });
  }

  const LOGO_WIDTH = 300;
  const LOGO_HEIGHT = LOGO_WIDTH / 2.787;

  return (
    <header
      className={`navbar-component u-padding-medium ${
        scrollFlag ? "navbar-component--sticky" : ""
      }`}
    >
      <a href="#carousel">
        <img
          src="/images/logo-white.png"
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          alt="logo selvatica arbicoltura"
          className={`navbar-component__logo ${
            scrollFlag ? "navbar-component__logo--sticky" : ""
          }`}
        />
      </a>
      <div
        className={`navbar-component__burger-menu ${
          isMenuOpen ? "navbar-component__burger-menu--active" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="navbar-component__burger-menu-line"></span>
        <span className="navbar-component__burger-menu-line"></span>
        <span className="navbar-component__burger-menu-line"></span>
      </div>
      <div className={`slide ${isMenuOpen ? "slide--active" : ""}`}>
        <nav
          className={`slide__menu ${
            isMenuOpen ? "slide__menu--active" : ""
          } u-padding-medium`}
        >
          <ul className="slide__list">
            {navbarItemList.map(({ id, label }) => (
              <a href={`#${id}`} key={id}>
                <li
                  className="slide__list-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </li>
              </a>
            ))}
          </ul>
          <div className="slide__languages">
            <span>Cat</span>
            <span className="u-margin-left-medium">Es</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
