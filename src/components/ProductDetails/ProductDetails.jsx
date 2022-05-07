import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/ProductActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, descirption } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

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
        <div>...Loading</div>
      ) : (
        <div>{title}</div>
      )}
    </div>
  );
};

export default ProductDetails;
