import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={`${styles.headerContainer} row flex`}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Pretty Wool Things" />
          </a>
        </div>
        <div className={styles.nav}>
          <ul>
            <li><Link to={"/"}>Burslu Çanta</Link></li>
            <li><Link to={"/"}>Clutch</Link></li>
            <li><Link to={"/"}>Jut Çanta</Link></li>
            <li><Link to={"/"}>Şapka</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
