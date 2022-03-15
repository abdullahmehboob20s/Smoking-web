import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container-wrapper">
        <div className={styles.navbarWrapper}>
          <Link to="/">
            <img src={logo} className={styles.logo} alt="" />
          </Link>

          <Button title="PRESALE" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
