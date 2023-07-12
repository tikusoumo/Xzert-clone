import styles from "../styles/page.module.css";

function Hero() {
  return (
    <>
      <div className={styles.pattern1}></div>
      <div className={styles.container}>
        <div className={styles.dancingBoxWrap}>
          <div className={styles.dancingBox}>
            <div className={styles.boxCube}>
              <div className={`${styles.boxFaces} ${styles.boxFront}`}></div>
              <div className={`${styles.boxFaces} ${styles.boxBack}`}></div>
              <div className={`${styles.boxFaces} ${styles.boxTop}`}></div>
              <div className={`${styles.boxFaces} ${styles.boxBottom}`}></div>
              <div className={`${styles.boxFaces} ${styles.boxLeft}`}></div>
              <div className={`${styles.boxFaces} ${styles.boxRight}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.brandNBtn}>
          <h2 className={styles.brandTagLine}>
            <span className={styles.txtColor1}>Build, </span>
            <span className={styles.txtColor2}>test, </span>
            <span className={styles.txtColor3}>and </span>
            <span className={styles.txtColor4}>execute your ideas </span>
            <span className={styles.txtColor3}>with our </span>
            <span className={styles.txtColor5}>innovative solutions</span>
            <span className={styles.txtColor2}>.</span>
          </h2>
          <div className={styles.ctaBtnGroup}>
            <a
              href="#"
              className={`${styles.btn} ${styles.ctaBtn} ${styles.cta1}`}
            >
              <span className={styles.cta1Icon}></span>
              <span className={styles.ctaTxt}>Chat now on Whatsapp</span>
            </a>
            <a
              className={`${styles.btn} ${styles.ctaBtn} ${styles.cta2}`}
              href="#"
            >
              <span className={styles.ctaIcon}></span>
              <span className={styles.ctaTxt}>Explore Our Services</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
