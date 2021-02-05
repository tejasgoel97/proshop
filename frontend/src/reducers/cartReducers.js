const { CART_ADD_ITEMS, CART_REMOVE_ITEMS } = require("../actions/cartAction");

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
let initialState = { cartItems: cartItems };
if (!cartItems) initialState = { cartItems: [] };
console.log("LOCAL STORAGE", cartItems);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEMS:
      console.log("ITEM IN REDUCER", action.payload);
      const item = action.payload;
      let newCart = state.cartItems;
      const existingItemIndex = state.cartItems.findIndex((p) => {
        return p._id === item._id;
      });
      console.log("NEW CART IS ", newCart);
      if (existingItemIndex >= 0) {
        newCart[existingItemIndex] = item;
      } else {
        newCart.push(item);
      }
      return { ...state, cartItems: newCart };
    case CART_REMOVE_ITEMS:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
