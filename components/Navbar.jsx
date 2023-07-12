import styles from "../styles/page.module.css";
import Logo from "../public/xzect-logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.headerLogo}>
          <a href="#">
            <Image src={Logo} alt="Logo" className={styles.logo} />
          </a>
          <h1 className={styles.companyName}>Xzect</h1>
        </div>
        <div>
          <div className={styles.headerMenu}>
            <div className={styles.menuBtnWrap}>
              <div className={styles.menuBtn}>
                <span id={styles.menuBtnTop}></span>
                <span id={styles.menuBtnMiddle}></span>
                <span id={styles.menuBtnBottom}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${styles.gradientBorder} ${styles.gradientColor1}`}
      ></div>
    </>
  );
}

export default Navbar;
