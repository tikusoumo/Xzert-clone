import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <header className={`${styles.header} ${styles.container}`}>
        <Navbar />
      </header>
      <section className={styles.mainMenu}>
        <Menu />
      </section>
      <div className={styles.headerFix}></div>
      <section className={styles.companyIntro}>
        <Hero/>
      </section>
      <section className={styles.xzectServices}>
        
      </section>
    </>
  );
}
