import styles from "@/styles/page.module.css";

function Consultation() {
  return (
    <>
      <div className={styles.pattern2}></div>
      <div className={styles.container}>
        <h2>Innovate. Validate. Launch</h2>
        <p className={`${styles.gradientText} ${styles.gradientColor1}`}>
          Let‘s transform your idea into reality with our MVP development
          services.
        </p>
        <a
          className={`${styles.btn} ${styles.gradientBtn1} ${styles.gradientColor2}`}
          href="#"
        >
          Book a free consultation!
        </a>
      </div>
    </>
  );
}

export default Consultation;
