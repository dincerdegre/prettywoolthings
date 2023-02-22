import React from "react";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={`${styles.categories} row`}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://dmih5ui1qqea9.cloudfront.net/pictures_large/prettywoolthings_7e50b0f71a8be91db120e8ff1fa1b05a.jpeg"
            className={styles.centerHeight}
            alt="Burslu Çanta Kategorisi"
          />
          <div className={styles.catName}>Burslu Çanta</div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="/images/clutch.png"
            className={styles.centerWidth}
            alt="Clutch Kategorisi"
          />
          <div className={styles.catName}>Clutch </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={`${styles.row}`}>
          <img
            src="/images/jut-canta.png"
            className={styles.centerWidth}
            alt="Jut Çanta Kategorisi"
          />
          <div className={styles.catName}>Jut Çanta</div>
        </div>
        <div className={`${styles.row}`}>
          <img src="/images/sapka.png" alt="Şapka Kategorisi" />
          <div className={styles.catName}>Şapka</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
