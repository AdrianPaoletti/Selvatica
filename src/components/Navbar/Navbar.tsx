/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  2.78700745474;

  return (
    <section className={styles.navbar}>
      <img
        src="/images/logo-black.png"
        width={325}
        height={116.6}
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
