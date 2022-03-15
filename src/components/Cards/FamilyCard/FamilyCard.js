import React from "react";
import styles from "./FamilyCard.module.css";

const FamilyCard = ({ img, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <img src={img} className={`${styles.cardImg} mb-35px`} alt="" />
      <h4 className="fs-24px white text-center weight-7 mb-10px">{title}</h4>
      <p className="fs-16px white text-center weight-5">{subtitle}</p>
    </div>
  );
};

export default FamilyCard;
