import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductWidget = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderProducts = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>{title}</Link>
      </div>
    );
  });
  return <>{renderProducts}</>;
};

export default ProductWidget;
