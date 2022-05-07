import React from "react";
import { useSelector } from "react-redux";

const ProductWidget = () => {
  const products = useSelector((state) => state.allProducts.products);
  /*   const { id, title } = products[0]; */
  console.log(products);
  return <div>{/* {title} */}</div>;
};

export default ProductWidget;
