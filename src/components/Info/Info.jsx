import React from 'react';
import styles from './Info.module.scss';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PanToolIcon from '@mui/icons-material/PanTool';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import SecurityIcon from '@mui/icons-material/Security';

const Info = () => {
  return (
    <div className={`${styles.info} row`}>
        <div className={styles.item}>
            <div className={styles.icon}><LocalShippingIcon style={{fontSize:'50px'}} /></div>
            <div className={styles.desc}>
                <h3>Hızlı Teslim</h3>
                <p>Güvenli Paketleme</p>
            </div>
        </div>
        <div className={styles.item}>
        <div className={styles.icon}><PanToolIcon style={{fontSize:'36px'}} /></div>
            <div className={styles.desc}>
                <h3>%100 El Yapımı</h3>
                <p>Kaliteli Malzeme</p>
            </div>
        </div>
        <div className={styles.item}>
        <div className={styles.icon}><CurrencyLiraIcon style={{fontSize:'42px'}} /></div>
            <div className={styles.desc}>
                <h3>Online Ödeme</h3>
                <p>EFT / Kredi Kartı</p>
            </div>
        </div>
        <div className={styles.item}>
        <div className={styles.icon}><SecurityIcon style={{fontSize:'42px'}} /></div>
            <div className={styles.desc}>
                <h3>%100 Güvenli</h3>
                <p>Güvenli Alışveriş</p>
            </div>
        </div>
    </div>
  )
}

export default Info