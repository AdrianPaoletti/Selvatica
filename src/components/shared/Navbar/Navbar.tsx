/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import SelvaticaContext from "selvatica/core/store/context/SelvaticaContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(SelvaticaContext);
  const [isFadeOutOn, setIsFadeOutOn] = useState<boolean>(false);
  const [scrollFlag, setScrollFlag] = useState<boolean>(false);
  const { t, i18n } = useTranslation(["common"]);
  const [languageSelected, setLanguageSelected] = useState<string>("es");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollFlag(true);
        return;
      }
      setScrollFlag(false);
    });
  }, []);

  const navbarItemList = [
    {
      id: "/servicios",
      label: "services",
    },
    {
      id: "/quienes-somos",
      label: "who-we-are",
    },
    {
      id: "/#biodiversity",
      label: "ecosystem",
    },
    {
      id: "/#contact",
      label: "contact",
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
                {t(label)}
              </li>
            </Link>
          ))}
        </ul>
        <div className="slide__languages">
          <span
            className={`slide__language ${
              languageSelected === "cat" && "slide__language--selected"
            }`}
            onClick={() => {
              i18n.changeLanguage("cat");
              setLanguageSelected("cat");
            }}
          >
            Cat
          </span>
          <span
            className={`slide__language ${
              languageSelected === "es" && "slide__language--selected"
            } u-margin-left-medium`}
            onClick={() => {
              i18n.changeLanguage("es");
              setLanguageSelected("es");
            }}
          >
            Es
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
