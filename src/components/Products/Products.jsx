import React, { useState,useEffect } from "react";
import styles from "./Products.module.scss";
import productsJSON from "../../data/products.json";
import Item from "./Item/Item";

const Products = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (productsJSON?.products.length !== 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [loading]);

  return (
    <div className={`${styles.products} row`}>
      <div className={styles.top}>
        <h2>ÜRÜNLERİMİZ</h2>
        <p>Modellerimizle sizlere kişiye özel tamamen el yapımı ürünler sunmaktayız. </p>
      </div>
      <div className={styles.bottom}>
        {loading ? (
          <p>Ürünler Yükleniyor</p>
        ) : (
          productsJSON?.products.map((product) => {return <Item key={product.id} id={product.id} title={product.title} price={product.price} category={product.category} image={product.image} />})
        )}
      </div>
    </div>
  );
};

export default Products;
