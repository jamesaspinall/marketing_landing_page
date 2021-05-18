import React from "react";
import * as styles from "./styles.module.scss";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Waypath grown by Agridigital</p>
      <p className={styles.copyright}>Copyright 2021 &copy;</p>
      <div className={styles.socials}>
        <FaInstagram className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaYoutube className={styles.icon} />
        <FaTwitter className={styles.icon} />
      </div>
    </footer>
  );
};
export default Footer;
