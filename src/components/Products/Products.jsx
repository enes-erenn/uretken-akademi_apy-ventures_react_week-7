import React from "react";
import ProductWidget from "../ProductWidget/ProductWidget";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../redux/actions/ProductActions";
import styles from "./Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const products = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(products.data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.container} >
      <div className={styles.top}>
        <h2 className={styles.title}>Products</h2>
        <div className={styles.actions}>
          <h4>Filter</h4>
          <h4>Sort</h4>
        </div>
      </div>
      <div className={styles.products}>
        <ProductWidget />
      </div>
    </div>
  );
};

export default Products;
