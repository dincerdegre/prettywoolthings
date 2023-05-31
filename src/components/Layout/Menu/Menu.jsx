import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ openMenu,onClick }) => {
  return (
    <div className={openMenu ? `${styles.menu} ${styles.open}` : styles.menu}>
      <div>
        <ul>
          <li>
            <Link to={"/"} onClick={onClick}>Anasayfa</Link>
          </li>
          <li>
              <Link to={"/"} onClick={onClick}>Burslu Çanta</Link>
            </li>
            <li>
              <Link to={"/"} onClick={onClick}>Clutch</Link>
            </li>
            <li>
              <Link to={"/"} onClick={onClick}>Jut Çanta</Link>
            </li>
            <li>
              <Link to={"/"} onClick={onClick}>Şapka</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
