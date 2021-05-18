import React from "react";
import { ImQuotesRight } from "react-icons/im";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles.module.scss";
const Testimonial = ({ comment, isLite, side, farmer, location }) => {
  const applyStyle = () => {
    if (isLite && side === "left") {
      return styles.testimonial_main_container_light_left;
    }
    if (isLite && side === "right") {
      return styles.testimonial_main_container_light_right;
    }
    if (!isLite && !side) {
      return styles.testimonial_main_container_dark;
    }
  };
  return (
    <div className={applyStyle()}>
      <div
        className={
          isLite ? styles.testimonial_icon_dark : styles.testimonial_icon_light
        }
      >
        <ImQuotesRight />
      </div>
      <div className={styles.testimonial_quote}>
        {comment}{" "}
        <p className={styles.subtext}>
          {farmer} <span>|</span> {location}
        </p>
      </div>
      <div className={styles.testimonial_quote}></div>
      <div className={styles.testimonial_avatar}></div>
    </div>
  );
};

export default Testimonial;
