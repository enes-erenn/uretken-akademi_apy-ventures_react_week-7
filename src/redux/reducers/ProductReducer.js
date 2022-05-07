import { ActionTypes } from "../constants/actions-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Product 1",
      category: "Pants",
    },
  ],
};

export const productReducer = (state, { type, action }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
