import React from "react";
import styles from "./Footer.module.scss";
import payment from "../../../assets/images/payment.png";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footerContainer} row`}>
        <div className={styles.top}>
          <div className={styles.item} id="iletisim">
            <h3>İLETİŞİM</h3>
            <ul>
              <li><a href="mailto:pwoolthings@gmail.com" title="Mail">pwoolthings@gmail.com</a></li>
              <li><a href="https://www.instagram.com/prettywoolthings/" target="_blank" rel="noreferrer" title="Instagram Prettywoolthings">Instagram</a></li>
            </ul>
          </div>
          <div className={styles.item} id="linkler">
            <h3>LİNKLER</h3>
            <ul>
              <li>
                <a href="/" title="Anasayfa">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/kategori/burslu-canta" title="Anasayfa">
                  Burslu Çanta
                </a>
              </li>
              <li>
                <a href="/kategori/clutch" title="Clutch">
                  Clutch
                </a>
              </li>
              <li>
                <a href="/kategori/Jut çanta" title="Jut Çanta">
                  Jut Çanta
                </a>
              </li>
              <li>
                <a href="/kategori/sapka" title="Şapka">
                  Şapka
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.item} id="baglanti">
            <h3>ÜRÜN ÇEŞİTLERİ</h3>
            <ul>
              <li>
                <a href="/kategori/burslu-canta" title="Anasayfa">
                  Burslu Çanta
                </a>
              </li>
              <li>
                <a href="/kategori/clutch" title="Clutch">
                  Clutch
                </a>
              </li>
              <li>
                <a href="/kategori/Jut çanta" title="Jut Çanta">
                  Jut Çanta
                </a>
              </li>
              <li>
                <a href="/kategori/sapka" title="Şapka">
                  Şapka
                </a>
              </li>
              <li>
                <a href="/kategori/bilezik" title="Bilezik">
                  Bilezik
                </a>
              </li>
              <li>
                <a href="/" title="Punch Needle Designer">
                Punch needle designer
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.item} ${styles.large}`} id="baglanti">
            <h3>BİZİMLE BAĞLANTIYA GEÇİN</h3>
            <p>
              Punch, Clutch, Burslu, Jut vb. çanta modellerimizle sizlere kişiye
              özel tamamen el yapımı ürünler sunmaktayız. Eft veya Shopier
              güvencesi ile Kredi kartınız aracılığıyla alışveriş
              yapabilirsiniz. Ürün ve diğer sorularınız için iletişim
              kanallarımızı kullanabilirsiniz.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <span className={styles.bottomLogo}>
              PrettyWool<span>Things</span>
            </span>{" "}
            <span className={styles.copyright}>
              {" "}
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className={styles.right}>
            <img src={payment} alt="payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
