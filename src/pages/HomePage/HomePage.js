import Hero from "layouts/Hero/Hero";
import LeefIsland from "layouts/LeefIsland/LeefIsland";
import Navbar from "layouts/Navbar/Navbar";
import NFTS from "layouts/NFTS/NFTS";
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
        <div>
          <LeefIsland />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
