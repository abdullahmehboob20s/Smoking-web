import SKCNFT from "components/Modals/SKCNFT/SKCNFT";
import Family from "layouts/Family/Family";
import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Hero/Hero";
import JoinCommunity from "layouts/JoinCommunity/JoinCommunity";
import LeefIsland from "layouts/LeefIsland/LeefIsland";
import Navbar from "layouts/Navbar/Navbar";
import NFTS from "layouts/NFTS/NFTS";
import OfficialPartners from "layouts/OfficialPartners/OfficialPartners";
import ReserveNFTFor from "layouts/ReserveNFTFor/ReserveNFTFor";
import Roadmap from "layouts/Roadmap/Roadmap";
import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  console.log("re-rendering");

  return (
    <div className={styles.Home}>
      <SKCNFT />
      <div className={styles.heroSection}>
        <Navbar />
        <div className="mb-150px">
          <Hero />
        </div>
        {/* <div className="mb-150px">
          <NFTS />
        </div> */}
        <div className="mb-150px">
          <LeefIsland />
        </div>
        <div className="mb-150px">
          <Roadmap />
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
        <div className="mb-150px">
          <JoinCommunity />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
