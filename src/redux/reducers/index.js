import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  counterReducer,
} from "./reducers";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: counterReducer,
});
export default reducers;
