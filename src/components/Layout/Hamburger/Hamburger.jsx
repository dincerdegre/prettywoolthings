import React from 'react';
import styles from './Hamburger.module.scss';

const Hamburger = ({className,onClick}) => {
  return (
    <div className={className} onClick={onClick}>
    <div className={`${styles.button}`}>
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
    </div>
    </div>
  )
}

export default Hamburger