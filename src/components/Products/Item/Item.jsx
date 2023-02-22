import React from 'react';
import styles from './Item.module.scss';

const Item = ({id,title,price,category,image}) => {
    const shopierLink = "https://www.shopier.com/ShowProductNew/products.php?id="+id;
  return (
    <div className={styles.cardItem}>
        <div className={styles.imageContainer}>
            <a href={shopierLink} target="_blank" rel="noreferrer">
                <img src={image} alt={title} />
            </a>
        </div>
        <div className={styles.infoContainer}>
            <h3><a href={shopierLink} target="_blank" rel="noreferrer">{title}</a></h3>
            <div className={styles.priceTab}>
                <div>{price}<span>TL</span></div>
            <a href={shopierLink} target="_blank" rel="noreferrer">Satın Al</a>
            </div>
        </div>
    </div>
  )
}

export default Item