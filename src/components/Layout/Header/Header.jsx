import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.png";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu((prev) => !prev);
  };

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
            <li>
              <Link to={"/"}>Burslu Çanta</Link>
            </li>
            <li>
              <Link to={"/"}>Clutch</Link>
            </li>
            <li>
              <Link to={"/"}>Jut Çanta</Link>
            </li>
            <li>
              <Link to={"/"}>Şapka</Link>
            </li>
          </ul>
        </div>
        <Hamburger className={styles.hamburger} onClick={openMenuHandler} />
      </div>
      <Menu openMenu={openMenu} onClick={openMenuHandler} />
    </header>
  );
};

export default Header;
