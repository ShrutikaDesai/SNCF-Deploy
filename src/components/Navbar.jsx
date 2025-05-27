import React from "react";
import styles from "./Navbar.module.css";
import logoImg from "../images/logo.webp"; // Change path as needed

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Core Values", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Who We Are", href: "#" },
  { name: "Our Guiding Force", href: "#" },
  { name: "Careers", href: "#", highlight: true },
];

const Navbar = () => (
  <>
    {/* Poppins Font Import */}
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <nav className={styles.navbar}>
      <div className={styles.logoBlock}>
        <img
          src={logoImg}
          alt="Sant Nirankari Charitable Foundation Logo"
          className={styles.logoImg}
        />
      </div>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.name} className={styles.navItem}>
            <a
              href={link.href}
              className={`${styles.navLink} ${link.highlight ? styles.careersLink : ""}`}
            >
              {link.name}
              {link.highlight && (
                <span className={styles.newBadge}>New</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default Navbar;
