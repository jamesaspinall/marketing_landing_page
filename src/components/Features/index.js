import React from "react";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";
const FeatureCard = () => {
  return (
    <>
      <div className="">
        <p className={styles.heading}>Waypath grown by AgriDigital</p>
        <p className={styles.subheading}>
          Waypath is an easy to use app to manage your contracts, deliveries,
          storage, payments and invoices, Waypath has you covered whether you’re
          in the office or out in the paddock.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <StaticImage
            src="../../images/contracts.jpg"
            alt="silos on a farm"
            placeholder="blurred"
            className={styles.hero_image}
            height={200}
          />
          <p className={styles.title}>Delivery</p>
          <p className={styles.description}>
            Track every truck that leaves the field in real time
          </p>
        </div>
        <div className={styles.card}>
          <StaticImage
            src="../../images/contracts.jpg"
            alt="silos on a farm"
            placeholder="blurred"
            className={styles.hero_image}
            height={200}
          />
          <p className={styles.title}>Inventory</p>
          <p className={styles.description}>
            Manage and optimise on farm storage on the go
          </p>
        </div>
        <div className={styles.card}>
          <StaticImage
            src="../../images/contracts.jpg"
            alt="silos on a farm"
            placeholder="blurred"
            className={styles.hero_image}
            height={200}
          />
          <p className={styles.title}>Contracts</p>
          <p className={styles.description}>
            Execute onto sales contracts and know your true position in real
            time
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
