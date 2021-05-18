import React from "react";
import * as styles from "./styles.module.scss";
import Testimonial from "./components/Testimonial";
import { FaChevronRight } from "react-icons/fa";
export const testimonials = [
  {
    comment:
      "For us, Waypath is the link between the paddock, the silo & the office",
    isLite: true,
    side: "left",
    farmer: "Chris Condon",
    location: "Goolgowi, NSW",
  },
  {
    comment:
      "It's simple, it's easy & it's live - you'd never lose a load again",
    isLite: false,
    farmer: "Gary Weston",
    location: "Gilgandra, NSW",
  },
  {
    comment: "I know what I have got stored, anytime, anywhere",
    isLite: true,
    side: "right",
    farmer: "Nick Patterson",
    location: "Mininera, VIC",
  },
];
const FeatureCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {testimonials.map((test, index) => (
          <Testimonial
            key={index}
            comment={test.comment}
            isLite={test.isLite}
            side={test.side}
            farmer={test.farmer}
            location={test.location}
          />
        ))}
      </div>
      <div className={styles.cta_wrapper}>
        <a
          className={styles.test_cta}
          href="https://www.agridigital.io/resources/reports"
          target="_blank"
          rel="noreferrer noopener"
        >
          Hear more from Waypath farmers <FaChevronRight />
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
