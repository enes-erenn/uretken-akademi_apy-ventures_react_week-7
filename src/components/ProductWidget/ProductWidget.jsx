import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductWidget.module.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { incCounter } from "../../redux/actions/CartActions";
import { useDispatch } from "react-redux";

const ProductWidget = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [isHover, setIsHover] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const renderProducts = products.map((product) => {
    const { id, title, image, price, rating } = product;
    return (
      <div
        key={id}
        className={styles.container}
        onMouseOver={() => setIsHover(product.id)}
        onMouseOut={() => setIsHover(null)}
      >
        <Link
          to={`/product/${id}`}
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <img src={image} className={styles.img} />
          <div className={styles.bottom}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.rating}>
              <Rating name="simple-controlled" value={rating.rate} readOnly />
            </div>
            <span className={styles.price}>${price}</span>
          </div>
        </Link>
        {isHover === id && (
          <button
            className={styles.addBtn}
            onClick={() => dispatch(incCounter(cart))}
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  });
  return <>{renderProducts}</>;
};

export default ProductWidget;
