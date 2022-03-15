import Family from "layouts/Family/Family";
import Hero from "layouts/Hero/Hero";
import JoinCommunity from "layouts/JoinCommunity/JoinCommunity";
import LeefIsland from "layouts/LeefIsland/LeefIsland";
import Navbar from "layouts/Navbar/Navbar";
import NFTS from "layouts/NFTS/NFTS";
import OfficialPartners from "layouts/OfficialPartners/OfficialPartners";
import ReserveNFTFor from "layouts/ReserveNFTFor/ReserveNFTFor";
import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  console.log("re-rendering");

  return (
    <div className={styles.Home}>
      <div className={styles.heroSection}>
        <Navbar />
        <div className="mb-150px">
          <Hero />
        </div>
        <div className="mb-150px">
          <NFTS />
        </div>
        <div className="mb-150px">
          <LeefIsland />
        </div>
        <div className="mb-150px">
          <Family />
        </div>
        <div className="mb-150px">
          <OfficialPartners />
        </div>
        <div className="mb-200px">
          <ReserveNFTFor />
        </div>
        <div>
          <JoinCommunity />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
