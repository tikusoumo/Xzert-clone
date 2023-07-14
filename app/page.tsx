import styles from "@/styles/page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.headerFix}></div>
      <section className={styles.companyIntro}>
        <Hero />
      </section>
      <section className={styles.xzectServices}>
        <Services />
      </section>
      <section className={styles.techStack}>
        <TechStack />
      </section>
      <section className={styles.footerCta}>
        <Consultation />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
