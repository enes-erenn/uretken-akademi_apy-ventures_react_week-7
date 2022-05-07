import { ActionTypes } from "../constants/actions-types";

export const incCounter = (state) => ({
  type: ActionTypes.INC_CART,
  payload: state,
});
