/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const LOGO_WIDTH = 325;
  const LOGO_HEIGHT = LOGO_WIDTH / 2.787;

  return (
    <section className={`${styles.navbar} u-padding-medium`}>
      <img
        src="/images/logo-white.png"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        alt="logo selvatica arbicoltura"
      />
      <div
        className={`${styles["navbar__menu"]} ${
          isMenuOpen ? styles["navbar__menu--active"] : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles["navbar__menu-line"]}></span>
        <span className={styles["navbar__menu-line"]}></span>
        <span className={styles["navbar__menu-line"]}></span>
      </div>
    </section>
  );
};

export default Navbar;
