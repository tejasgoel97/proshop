import axios from "axios";

export const CART_ADD_ITEMS = "CART_ADD_ITEMS";
export const CART_REMOVE_ITEMS = "CART_REMOVE_ITEMS";

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios(`/api/products/${id}`);
      const item = { ...data, qty: qty };
      dispatch({ type: CART_ADD_ITEMS, payload: item });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (err) {}
  };
};
