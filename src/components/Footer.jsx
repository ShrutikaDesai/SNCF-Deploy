import React from "react";
// import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaRss } from "react-icons/fa";
import snmLogo from "../images/logo.webp"; // Place your logo image in the same folder and update the filename if needed

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      <div className={styles.footerLinksSection}>
        <h4 className={styles.footerHeading}>Quick Links</h4>
        <ul className={styles.footerLinks}>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Social Media – Some Guidelines</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className={styles.footerLinksSection}>
        <h4 className={styles.footerHeading}>Useful Links</h4>
        <ul className={styles.footerLinks}>
          <li><a href="#">Award and Honors</a></li>
          <li><a href="#">Our Partners</a></li>
          <li><a href="#">Foreign Contributions</a></li>
          <li><a href="#">Contribute</a></li>
        </ul>
      </div>
    </div>

    <div className={styles.footerBottom}>
      <div className={styles.socialIcons}>
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="RSS"><FaRss /></a>
      </div>
      <div className={styles.copyright}>
        Copyright © 2010 | Sant Nirankari Charitable Foundation
      </div>
      <div className={styles.snmLogoBlock}>
        <img src={snmLogo} alt="Sant Nirankari Mission" className={styles.snmLogo} />
        <span className={styles.snmText}>Sant Nirankari Mission</span>
      </div>
    </div>
    <button className={styles.scrollTopBtn} aria-label="Scroll to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <svg width="26" height="26" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#fff" stroke="#333" strokeWidth="2"/>
        <polyline points="8,14 12,10 16,14" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </footer>
);

export default Footer;
