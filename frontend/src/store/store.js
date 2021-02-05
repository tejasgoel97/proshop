import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  productlistReducer,
  productDetailReducer,
} from "../reducers/productReducer";
import cartReducer from "../reducers/cartReducers";

const reducer = combineReducers({
  productList: productlistReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
