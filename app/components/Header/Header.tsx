'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import Logo from '../../assets/images/nebest-full-logo.svg';
import { breakpoints } from "@/app/utilis/design-breakpoints";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = (state: boolean) => {
    const screen = window.innerWidth;
    const breakPoint = parseInt(breakpoints.tabPort) * 16;

    screen <= breakPoint ? setIsMenuOpen(!state) : null;
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={Logo} alt="NebestFitness Logo" className={styles.logo} />
      </Link>

      <div className={styles.navBox}>
        <div className={styles.menuBtn}
          onClick={() => {
            handleMenuOpen(isMenuOpen);
          }}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            size="xl"
          />
        </div>

        <nav className={styles.nav} style={isMenuOpen ? { display: "flex" } : {}}>
          <Link
            className={styles.navLink}
            href="/#header"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            Home
          </Link>
          <Link
            className={styles.navLink}
            href="/#about-us"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            About Us
          </Link>
          <Link
            className={styles.navLink}
            href="/#services"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            Services
          </Link>
          <Link
            className={styles.navLink}
            href="/#gallery"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            Gallery
          </Link>
          <Link
            className={styles.navLink}
            href="/#testimonials"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            Testimonials
          </Link>
          <Link
            className={styles.navLink}
            href="/#contact-us"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            Contact Us
          </Link>
          <Link
            className={styles.navLink}
            href="/#blog"
            onClick={() => {
              handleMenuOpen(isMenuOpen);
            }}
          >
            Blog
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;