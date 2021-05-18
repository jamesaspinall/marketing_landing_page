import React from "react";
import * as styles from "./styles.module.scss";
const Contact = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        There is a better way than paper & spreadsheets
      </p>
      <a
        className={styles.signup_button}
        href="https://info.agridigital.io/waypath-free-trial"
        target="_blank"
        rel="noreferrer noopener"
      >
        Try For Free
      </a>
      <p className={styles.subheading}>
        For more details checkout our{" "}
        <a
          href="https://www.agridigital.io/products/waypathwebsite"
          target="_blank"
          rel="noreferrer noopener"
        >
          website
        </a>{" "}
        or give our team a call on 0423 567 498
      </p>
    </div>
  );
};

export default Contact;
