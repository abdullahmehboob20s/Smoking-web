import React from "react";
import styles from "./OfficialPartners.module.css";
import brand1 from "assets/images/brand1.png";
import brand2 from "assets/images/brand2.png";
import brand3 from "assets/images/brand3.png";
import brand4 from "assets/images/brand4.png";
import brand5 from "assets/images/brand5.png";
import brand6 from "assets/images/brand6.png";
import brand7 from "assets/images/brand7.png";
import brand8 from "assets/images/brand8.png";
import brand9 from "assets/images/brand9.png";
import brand10 from "assets/images/brand10.png";

function OfficialPartners() {
  return (
    <div className="container-wrapper">
      <div className="mb-60px">
        <h1 className="white weight-9 fs-48px mb-10px">OUR OFFICAL PARTNERS</h1>
      </div>

      <div className={styles.partnersWrapper}>
        <div className="mb-50px">
          <h1 className="sky-blue text-center fs-32px weight-9 mb-25px">
            WEED DISPENSARY
          </h1>
          <div className={`${styles.brands}`}>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
            <img src={brand10} alt="" />
          </div>
        </div>

        <div className="mb-50px">
          <div className={`${styles.divider}`}></div>
        </div>

        <div className="">
          <h1 className="sky-blue text-center fs-32px weight-9 mb-25px">
            BRANDS
          </h1>
          <div className={`${styles.brands}`}>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
            <img src={brand10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficialPartners;
