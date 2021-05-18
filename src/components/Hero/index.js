import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <StaticImage
        src="../../images/hero.webp"
        alt="silos on a farm"
        placeholder="blurred"
        className={styles.hero_image}
      />
      <div className={styles.shade_container}>
        <StaticImage
          src="../../images/logo.png"
          alt="waypath logo"
          placeholder="blurred"
          className={styles.logo_image}
          imgStyle={{ filter: "drop-shadow(2px 2px 3px #222)" }}
          layout="fixed"
          height={200}
        />
        <p className={styles.title}>
          Meet Your New <br /> Harvest Management Tool
        </p>
        <a className={styles.signup_button}>Try For Free</a>
      </div>
    </div>
  );
};

export default Hero;
