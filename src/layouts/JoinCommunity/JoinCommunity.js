import Button from "components/Button/Button";
import React from "react";
import styles from "./JoinCommunity.module.css";
import joinCommunityImg from "assets/images/joinCommunityImg.png";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

function JoinCommunity() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <Fade cascade fraction={0.1} delay={200} duration={500} triggerOnce>
          <h1
            className={`${
              isBellow1000px ? "fs-32px" : "fs-48px"
            }  weight-7 white uppercase mb-15px`}
          >
            JOIN THE COMMUNITY
          </h1>
          <p className="fs-16px font-open-sans weight-4 white opacity-0_7 mb-45px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button title="JOIN US" />

          <img
            src={joinCommunityImg}
            className={styles.joinCommunityImg}
            alt=""
          />
        </Fade>
      </div>
    </div>
  );
}

export default JoinCommunity;
