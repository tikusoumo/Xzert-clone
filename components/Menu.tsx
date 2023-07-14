import styles from "../styles/page.module.css";
import '@/styles/globals.css'


function Menu() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerMiddle}>
          <div className={styles.headerPopular}>
            <h3>Popular</h3>
            <ul className={styles.xzectUl}>
              <li>
                <a href="#">Magento Development</a>
              </li>
              <li>
                <a href="#">Wordpress Development</a>
              </li>
              <li>
                <a href="#">Ecommerce</a>
              </li>
              <li>
                <a href="#">Shopify</a>
              </li>
              <li>
                <a href="#">NFT</a>
              </li>
              <li>
                <a href="#">MVP</a>
              </li>
              <li>
                <a href="#">Drones</a>
              </li>
              <li>
                <a href="#">View all Popular</a>
              </li>
            </ul>
          </div>
          <div className={styles.headerServices}>
            <h3>Services</h3>
            <ul className={styles.xzectUl}>
              <li>
                <a href="#">Software &amp; App Development</a>
              </li>
              <li>
                <a href="#">Website Development &amp; SEO</a>
              </li>
              <li>
                <a href="#">Cloud Services</a>
              </li>
              <li>
                <a href="#">Robotics &amp; Automation</a>
              </li>
              <li>
                <a href="#">3D Printing &amp; prototyping</a>
              </li>
              <li>
                <a href="#">Data Science &amp; Analytics</a>
              </li>
              <li>
                <a href="#">AI &amp; Machine Learning</a>
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
                <a href="#">Research &amp; Development</a>
              </li>
              <li>
                <a href="#">View all Services</a>
              </li>
            </ul>
          </div>
          <div className={styles.headerIndustries}>
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
          <div className={styles.headerResources}>
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
      </div>
    </>
  );
}

export default Menu;
