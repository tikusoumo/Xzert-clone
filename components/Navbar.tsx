"use client";
import style from "@/styles/navBar.module.css";
import styles from "@/styles/page.module.css";
import Logo from "@/public/xzect-logo.svg";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuBtn, setMenuBtn] = useState(`${styles.menuBtn}`);
  const [mainMenu, setMainMenu] = useState(`${styles.mainMenu}`);
  const menuToggle = () => {
    if (!open) {
      setMenuBtn(`${styles.menuBtn} ${styles.open}`);
      setMainMenu(`${styles.mainMenu} ${styles.open}`);
    } else {
      setMenuBtn(`${styles.menuBtn}`);
      setMainMenu(`${styles.mainMenu}`);
    }
    setOpen(!open);
  };
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.navbar} ${styles.container}`}>
          <div className={styles.headerLogo}>
            <a className={styles.logoNname} href="#">
              <Image src={Logo} alt="Logo" className={styles.logo} />
              <h1 className={styles.companyName}>Xzect</h1>
            </a>
          </div>
          <div>
            <div onClick={menuToggle} className={styles.menuBtnWrap}>
              <div className={`${menuBtn}`}>
                <span id={styles.menuBtnTop}></span>
                <span id={styles.menuBtnMiddle}></span>
                <span id={styles.menuBtnBottom}></span>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`${styles.gradientBorder} ${styles.gradientColor1}`}
        ></div>
      </header>
      <section className={`${mainMenu}`}>
        <Menu />
      </section>
    </>
  );
}

export default Navbar;
