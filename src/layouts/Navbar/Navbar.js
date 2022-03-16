import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import useMediaQuery from "hooks/useMediaQuery";
import AppContext from "context/AppContext";
import { Fade } from "react-awesome-reveal";
import hamburger from "assets/images/hamburger.png";
import crossIcon from "assets/images/crossIcon.png";
import discordIcon from "assets/images/social-icons/discord.png";
import openseaIcon from "assets/images/social-icons/opensea.png";
import instagramIcon from "assets/images/social-icons/instagram.png";
import twitterIcon from "assets/images/social-icons/twitter.png";

function Navbar() {
  const { showModal, setShowModal } = useContext(AppContext);
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className="container-wrapper">
        <div className={styles.navbarWrapper}>
          <Fade direction="down" triggerOnce={true}>
            <div className={styles.left}>
              <Link to="/">
                <img src={logo} className={styles.logo} alt="" />
              </Link>

              {isBellow1000px ? (
                ""
              ) : (
                <>
                  <Link to="/" className="fs-16px white weight-6 uppercase">
                    LEEF ISLAND
                  </Link>
                  <Link to="/" className="fs-16px white weight-6 uppercase">
                    ROAD MAP
                  </Link>
                  <Link to="/" className="fs-16px white weight-6 uppercase">
                    PARTNER
                  </Link>
                </>
              )}
            </div>
          </Fade>

          {isBellow1000px ? (
            <button
              className={`${styles.hamburger} pointer`}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <img src={hamburger} alt="" />
            </button>
          ) : (
            <Fade direction="down" triggerOnce={true}>
              <div className={styles.right}>
                <button
                  className={`${styles.whitepaper} pointer fs-14px white weight-7 text-center`}
                >
                  WHITEPAPER
                </button>
                <Button
                  title="PRESALE"
                  onClick={() => setShowModal(!showModal)}
                />
              </div>
            </Fade>
          )}
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${showMobileMenu ? styles.show : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <img src={logo} className={styles.logo} alt="" />

          <button onClick={() => setShowMobileMenu(false)} className="pointer">
            <img src={crossIcon} alt="" />
          </button>
        </div>

        <div className={styles.mobileLinks}>
          <div className={styles.mobileMenuScrollLinks}>
            <Link to="/" className="fs-16px white weight-6 uppercase">
              LEEF ISLAND
            </Link>
            <Link to="/" className="fs-16px white weight-6 uppercase">
              ROAD MAP
            </Link>
            <Link to="/" className="fs-16px white weight-6 uppercase">
              PARTNER
            </Link>
          </div>
          <div className={styles.mobileMenuBtns}>
            <button
              className={`${styles.whitepaper} pointer fs-14px white weight-7 text-center`}
            >
              WHITEPAPER
            </button>
            <Button title="PRESALE" onClick={() => setShowModal(!showModal)} />
          </div>
        </div>

        <div className={`${styles.socialIcons} `}>
          <a href="/" target="_blank">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="/" target="_blank">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="/" target="_blank">
            <img src={openseaIcon} alt="" />
          </a>
          <a href="/" target="_blank">
            <img src={discordIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
