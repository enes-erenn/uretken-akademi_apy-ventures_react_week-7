import React from "react";
import ProductWidget from "../ProductWidget/ProductWidget";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../redux/actions/ProductActions";

const Products = () => {
  const products = useSelector((state) => state);
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
  console.log(products);
  return (
    <div>
      Products
      <ProductWidget />
    </div>
  );
};

export default Products;
