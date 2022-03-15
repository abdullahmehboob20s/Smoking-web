import Button from "components/Button/Button";
import React from "react";
import styles from "./LeefIsland.module.css";
import leef_island from "assets/images/leef_island.png";
import dollar_circle from "assets/images/dollar-circle.png";
import islandCardImg1 from "assets/images/islandCardImg1.png";
import islandCardImg2 from "assets/images/islandCardImg2.png";
import islandCardImg3 from "assets/images/islandCardImg3.png";
import islandCardImg4 from "assets/images/islandCardImg4.png";

const IslandCard = ({ img, title }) => {
  return (
    <div className={styles.islandCard}>
      <img src={img} className="mb-40px" alt="" />
      <p className="fs-24px white text-center weight-9 uppercase lh-1_4">
        {title}
      </p>
    </div>
  );
};

function LeefIsland() {
  return (
    <div className="container-wrapper-2">
      <div className="mb-50px">
        <h1 className="text-center pink weight-9 fs-76px mb-10px uppercase">
          LEEF ISLAND
        </h1>
        <h3 className="fs-40px white weight-7 text-center mb-40px">
          GameS- ShopS - Events{" "}
        </h3>
        <p
          className="white fs-24px weight-4 lh-1_4 text-center margin-center "
          style={{ maxWidth: "700px" }}
        >
          <span className="opacity-0_6">Enjoy a unique experience in the </span>
          <span className="opacity-1 weight-7">LEEF ISLAND</span>{" "}
          <span className="opacity-0_6">
            where all SKC Members will own an Island to grow LeefCoins and
            receive exclusives brand accesories.
          </span>
        </p>
      </div>

      <div className="mb-50px">
        <div className="w-fit-content margin-center ">
          <Button title="RESERVE YOUR SPOT" />
        </div>
      </div>

      <div className="relative mb-60px">
        <img src={leef_island} className={styles.leef_island} alt="" />
        <button
          className={`${styles.useLeaf} fs-20px white uppercase weight-6 pointer`}
        >
          <img src={dollar_circle} alt="" /> USE LEEFCOIN
        </button>
      </div>

      <div className={styles.cards}>
        <IslandCard
          title="OWN AN ISLAND & BUILD YOUR HOUSE"
          img={islandCardImg1}
        />
        <IslandCard
          title="Earn $LEEF coin everyday thanks to your farming Land"
          img={islandCardImg2}
        />
        <IslandCard
          title="Use $LEEF in our Shops and get delivered home !"
          img={islandCardImg3}
        />
        <IslandCard
          title="Performaing live in the LEEF Island"
          img={islandCardImg4}
        />
      </div>
    </div>
  );
}

export default LeefIsland;
