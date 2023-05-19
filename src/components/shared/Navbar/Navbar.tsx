/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import SelvaticaContext from "selvatica/core/store/context/SelvaticaContext";

const Navbar = () => {
  const LOGO_WIDTH = 300;
  const { isMenuOpen, setIsMenuOpen } = useContext(SelvaticaContext);
  const [isFadeOutOn, setIsFadeOutOn] = useState<boolean>(false);
  const [scrollFlag, setScrollFlag] = useState<boolean>(false);
  const [logoWidth, setLogoWidth] = useState<number>(LOGO_WIDTH);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrollFlag(true);
        return;
      }
      setScrollFlag(false);
    });
    window.onresize = () => {
      resizeWindow();
    };
    resizeWindow();
  }, []);

  const resizeWindow = () => {
    if (window.innerWidth < 800) {
      setLogoWidth(150);
      return;
    }
    setLogoWidth(LOGO_WIDTH);
  };

  const navbarItemList = [
    {
      id: "/servicios",
      label: "Servicios",
    },
    {
      id: "/quienes-somos",
      label: "Quines somos",
    },
    {
      id: "/#biodiversity",
      label: "Ecosistema",
    },
    {
      id: "/#contact",
      label: "Contacto",
    },
  ];

  return (
    <header
      className={`u-padding-medium navbar-component ${
        scrollFlag ? "navbar-component--sticky" : ""
      }`}
    >
      <Link href="/#carousel" scroll={false}>
        <img
          src="/images/logo-white.png"
          width={logoWidth}
          height={logoWidth / 2.787}
          alt="logo selvatica arbicoltura"
          className={`navbar-component__logo ${
            scrollFlag ? "navbar-component__logo--sticky" : ""
          }`}
        />
      </Link>

      <div
        className={`navbar-component__burger-menu ${
          isMenuOpen ? "navbar-component__burger-menu--active" : ""
        }`}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          setIsFadeOutOn(true);
        }}
      >
        <span className="navbar-component__burger-menu-line"></span>
        <span className="navbar-component__burger-menu-line"></span>
        <span className="navbar-component__burger-menu-line"></span>
      </div>

      <div
        className={`slide ${isMenuOpen ? "slide--active" : ""} ${
          isFadeOutOn ? "slide--fade-on" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav
        className={`slide__menu ${
          isMenuOpen ? "slide__menu--active" : ""
        } u-padding-medium`}
      >
        <ul className="slide__list">
          {navbarItemList.map(({ id, label }) => (
            <Link href={id} key={id} scroll={false}>
              <li
                className="slide__list-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="slide__languages">
          <span>Cat</span>
          <span className="u-margin-left-medium">Es</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
