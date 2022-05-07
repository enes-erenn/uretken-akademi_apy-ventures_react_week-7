import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/ProductActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description, rating } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(2);
  const getProductDetails = async () => {
    const product = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(product.data));
  };

  useEffect(() => {
    if (productId && productId !== "") getProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className={styles.loading}>...Loading</div>
      ) : (
        <div className={styles.container}>
          <div className={styles.box}>
            <img src={image} className={styles.image} />
            <div className={styles.productInfos}>
              <h3>{title}</h3>
              <h5>{category} </h5>
              <Rating
                name="simple-controlled"
                value={rating.rate}
                readOnly
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <p>{description}</p>
              <span>${price}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
