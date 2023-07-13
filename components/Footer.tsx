import styles from "@/styles/page.module.css";

function Footer() {
  return (
    <>
      <div className={`${styles.gradientBorder} ${styles.gradientColor1}`}></div>
      <div className={`${styles.container} ${styles.footerTop}`}>
        <div className={styles.footerAbout}>
          <h3>Xzect Labs Pvt. Ltd.</h3>
          <p className={styles.txtJustify}>
            Xzect provides a diverse array of services that enable both
            businesses and individuals to bring their vision to life . Our
            specialties include software development, website design and SEO,
            cloud services, robotics and automation, 3D printing and
            prototyping, data science and analytics, AI and machine learning,
            IOT, AR and VR, blockchain, and other tech-related services. Our
            team of experienced professionals is available to assist with the
            design and development of new products, exploration of robotics and
            automation possibilities, or any other requirements.
          </p>
          <p>
            <b>Registered Address:</b> 203, 2-A/3, Asaf Ali Road, Delhi - 110002
          </p>
          <p>
            <b>CIN:</b> U72200DL2022PTC408714
          </p>
          <p>
            <b>GST:</b> 07AAACX4373J1Z2
          </p>
          <div className={styles.footerSocial}>
            <a
              href="https://www.facebook.com/xzect"
              className={`${styles.icon32} ${styles.fsIcon} ${styles.facebook}`}
              aria-label="Facebook Page of Xzect Labs"
            ></a>
            <a
              href="https://www.instagram.com/xzect_labs/"
              className={`${styles.icon32} ${styles.fsIcon} ${styles.instagram}`}
              aria-label="Instagram Page of Xzect Labs"
            ></a>
            <a
              href="https://www.linkedin.com/company/xzect/"
              className={`${styles.icon32} ${styles.fsIcon} ${styles.linkedin}`}
              aria-label="Linkedin Page of Xzect Labs"
            ></a>
            <a
              href="https://twitter.com/xzect_labs"
              className={`${styles.icon32} ${styles.fsIcon} ${styles.twitter}`}
              aria-label="Twitter Page of Xzect Labs"
            ></a>
            <a
              href="https://in.pinterest.com/xzect_labs/"
              className={`${styles.icon32} ${styles.fsIcon} ${styles.pinterest}`}
              aria-label="Pinterest Page of Xzect Labs"
            ></a>
            <a
              href="https://www.youtube.com/@xzect_labs"
              className={`${styles.icon32} ${styles.fsIcon} ${styles.youtube}`}
              aria-label="Youtube Page of Xzect Labs"
            ></a>
          </div>
        </div>
        <div className={styles.footerServices}>
          <h3>Services</h3>
          <ul className={styles.xzectUl}>
            <li>
              <a href="#">
                Software &amp; App Development
              </a>
            </li>
            <li>
              <a href="#">
                Website Development &amp; SEO
              </a>
            </li>
            <li>
              <a href="#">Cloud Services</a>
            </li>
            <li>
              <a href="#">
                Robotics &amp; Automation
              </a>
            </li>
            <li>
              <a href="#">
                3D Printing &amp; prototyping
              </a>
            </li>
            <li>
              <a href="#">
                Data Science &amp; Analytics
              </a>
            </li>
            <li>
              <a href="#">
                AI &amp; Machine Learning
              </a>
            </li>
            <li>
              <a href="#">IOT, AR &amp; VR</a>
            </li>
            <li>
              <a href="#">Blockchain</a>
            </li>
            <li>
              <a href="#">Tech Consultancy</a>
            </li>
            <li>
              <a href="#">
                Research &amp; Development
              </a>
            </li>
            <li>
              <a href="#">View all Services</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerIndustries}>
          <h3>Industries</h3>
          <ul className={styles.xzectUl}>
            <li>
              <a href="#">eCommerce</a>
            </li>
            <li>
              <a href="#">Hyperlocal</a>
            </li>
            <li>
              <a href="#">Healthcare</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Gaming</a>
            </li>
            <li>
              <a href="#">Social Networking</a>
            </li>
            <li>
              <a href="#">Agriculture</a>
            </li>
            <li>
              <a href="#">Travel &amp; Aviation</a>
            </li>
            <li>
              <a href="#">Logistics</a>
            </li>
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Real Estate</a>
            </li>
            <li>
              <a href="#">View all Industries</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerResources}>
          <h3>Resources</h3>
          <ul className={styles.xzectUl}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Tech Stack</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Legal Information</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@xzect_labs">
                Youtube (@xzect_labs)
              </a>
            </li>
            <li>
              <a href="https://github.com/xzect">Github (@xzect)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          © 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
