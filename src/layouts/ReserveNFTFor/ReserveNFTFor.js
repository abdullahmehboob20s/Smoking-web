import LeafButton from "components/LeafButton/LeafButton";
import React from "react";
import styles from "./ReserveNFTFor.module.css";
import ethIcon from "assets/images/ethIcon.png";
import calendar from "assets/images/calendar.png";
import Button from "components/Button/Button";
import CollectionCard from "components/Cards/CollectionCard/CollectionCard";
import reserveNftImg from "assets/images/reserveNftImg.png";
import dollar_circle from "assets/images/dollar-circle.png";
import islandCardImg1 from "assets/images/islandCardImg1.png";

const Point = ({ title }) => {
  return (
    <div className={styles.point}>
      <div className={styles.bullet}></div>
      <p className="fs-16px white weight-5 lh-1_3">{title}</p>
    </div>
  );
};

function ReserveNFTFor() {
  return (
    <div className="container-wrapper">
      <div className={styles.section}>
        <div className={styles.left}>
          <div className={styles.leftBtn}>
            <LeafButton
              icon={dollar_circle}
              title={
                <span>
                  FARM <span className="sky-blue">2000 LEEFCOIN</span> PER MONTH
                </span>
              }
              fontSize="fs-20px"
              style={{ maxWidth: "350px", textAlign: "left" }}
            />
          </div>
          <div className={styles.nftImg}>
            <CollectionCard img={reserveNftImg} />
          </div>
          <img src={islandCardImg1} className={styles.islandCardImg1} alt="" />
        </div>
        <div className={styles.right}>
          <h1 className="fs-48px white weight-9 lh-1_2 mb-30px">
            RESERVE YOUR <span className="pink">SKC NFT</span> FOR
          </h1>

          <div className={`${styles.downDate} mb-35px`}>
            <LeafButton icon={ethIcon} title="0.420 ETH" fontSize="fs-20px" />

            <div className={styles.sale}>
              <img src={calendar} alt="" />
              <div>
                <p className="sky-blue fs-16px weight-9 mb-5px">END OF SALE</p>
                <p className="fs-24px white weight-9">APRIL 14</p>
              </div>
            </div>
          </div>

          <p className="fs-20px uppercase white mb-30px weight-7">Include</p>

          <div className={`${styles.points} mb-40px`}>
            <Point title="A Unique SMOKING KONG NFT Made By @" />
            <Point title="A private ISLAND NFT in The LEEF ISLAND ®" />
            <Point title="A Seed NFT That Will Allow You To Farm More Than 2000 $LeefCoin Per Month" />
            <Point title="A Chance To Get a Partner Kong NFT" />
            <Point title="A Chance To Get a Unique SMOKING KONG CLUB set home-delivered worldwide" />
          </div>

          <Button title="PRESALE" />
        </div>
      </div>
    </div>
  );
}

export default ReserveNFTFor;
