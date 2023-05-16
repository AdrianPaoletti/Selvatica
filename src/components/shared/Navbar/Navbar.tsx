/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SelvaticaContext from "selvatica/core/store/context/SelvaticaContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, isWhite, setIsWhite } =
    useContext(SelvaticaContext);

  const router = useRouter();
  const [scrollFlag, setScrollFlag] = useState<boolean>(false);
  const [isFadeOutOn, setIsFadeOutOn] = useState<boolean>(false);

  const LOGO_WIDTH = 300;
  const LOGO_HEIGHT = LOGO_WIDTH / 2.787;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrollFlag(true);
      } else {
        setScrollFlag(false);
      }
    });
    if (navbarItemList.find(({ id }) => router.pathname === id)) {
      setIsWhite(false);
      return;
    }
    setIsWhite(true);
  }, [router.pathname]);

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
      label: "Biodiversidad",
    },
    {
      id: "/#contact",
      label: "Contacto",
    },
  ];

  return (
    <header
      className={`navbar-component u-padding-medium ${
        scrollFlag ? "navbar-component--sticky" : ""
      }`}
    >
      <Link href="/#carousel" scroll={false}>
        <img
          src={`${
            isWhite ? "/images/logo-white.png" : "/images/logo-black.png"
          }`}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
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
        <span
          className={`navbar-component__burger-menu-line ${
            isWhite ? "" : "navbar-component__burger-menu-line--black"
          }`}
        ></span>
        <span
          className={`navbar-component__burger-menu-line ${
            isWhite ? "" : "navbar-component__burger-menu-line--black"
          }`}
        ></span>
        <span
          className={`navbar-component__burger-menu-line ${
            isWhite ? "" : "navbar-component__burger-menu-line--black"
          }`}
        ></span>
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
