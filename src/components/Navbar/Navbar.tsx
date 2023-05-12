/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./Navbar.module.scss";

const Navbar = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const LOGO_WIDTH = 325;
  const LOGO_HEIGHT = LOGO_WIDTH / 2.787;

  return (
    <>
      <header className={`${styles.navbar} u-padding-medium`}>
        <img
          src="/images/logo-white.png"
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          alt="logo selvatica arbicoltura"
        />
        <div
          className={`${styles["navbar__burger-menu"]} ${
            isMenuOpen ? styles["navbar__burger-menu--active"] : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles["navbar__burger-menu-line"]}></span>
          <span className={styles["navbar__burger-menu-line"]}></span>
          <span className={styles["navbar__burger-menu-line"]}></span>
        </div>
      </header>

      <div className={`${styles["slide"]}`}>
        <nav
          className={`${styles["slide__menu"]} ${
            isMenuOpen ? styles["slide__menu--active"] : ""
          } u-padding-medium`}
        >
          <ul className={`${styles["slide__list"]} `}>
            <li className={styles["slide__list-item"]}>Biodiversitat</li>
            <li className={styles["slide__list-item"]}>Contacte</li>
            <li className={styles["slide__list-item"]}>Qui som</li>
          </ul>
          <div className={`${styles["slide__languages"]}`}>
            <span>Cat</span>
            <span className="u-margin-left-medium">Es</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
