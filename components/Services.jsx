import styles from "../styles/page.module.css";
import Image from "next/image";
import SoftwareImg from "../public/images/services/software-and-app-dev.jpg"
import DevAndSeoImg from "../public/images/services/website-dev-and-seo.jpg"
import CloudServiceImg from "../public/images/services/cloud-services.jpg"
import RoboticsImg from "../public/images/services/robotics.jpg"
import ThreeDImg from "../public/images/services/3d-printing-and-prototyping.jpg"
import DataScienceImg from "../public/images/services/data-science.jpg"
import MachineLearningImg from "../public/images/services/machine-learning.jpg"
import ARVRImg from "../public/images/services/ar-vr.jpg"
import BlockChainImg from "../public/images/services/blockchain.jpg"
import TechConsultancyImg from "../public/images/services/tech-consultancy.jpg"
import ResearchNDevImg from "../public/images/services/research-and-dev.jpg"

function Services() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.sectionH2}>
          Customised Solutions for All Your Business Needs
        </h2>
        <p className={styles.sectionP}>
          Take Your Business to the Next Level with Our Industry-Leading
          Services
        </p>
        <div className="styles.services-group">
          <div className="styles.services-list">
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={SoftwareImg} alt=""/>
              <h3>Software &amp; App Development</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={DevAndSeoImg} alt=""/>
              <h3>Website Development &amp; SEO</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={CloudServiceImg} alt=""/>
              <h3>Cloud Services</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={RoboticsImg} alt=""/>
              <h3>Robotics &amp; Automation</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={ThreeDImg} alt=""/>
              <h3>3D Printing &amp; Prototyping</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={DataScienceImg} alt="" />
              <h3>Data Science &amp; Analytics</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={MachineLearningImg} alt=""/>
              <h3>AI &amp; Machine Learning</h3>
              <p>Get Started</p>
            </a>
            <a className={`${styles.serviceCard} ${styles.undefined}`}  href="#">
              <Image src={ARVRImg} alt=""/>
              <h3>IOT, AR &amp; VR</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={BlockChainImg} alt=""/>
              <h3>Blockchain</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={TechConsultancyImg} alt=""/>
              <h3>Tech Consultancy</h3>
              <p>Get Started</p>
            </a>
            <a
              className={`${styles.serviceCard} ${styles.undefined}`} 
              href="#"
            >
              <Image src={ResearchNDevImg} alt=""/>
              <h3>Research &amp; Development</h3>
              <p>Get Started</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
