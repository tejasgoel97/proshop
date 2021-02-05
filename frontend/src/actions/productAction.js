import axios from "axios";

const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";
const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST";
const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS";
const PRODUCT_DETAIL_FAIL = "PRODUCT_DETAIL_FAIL";

export const listProducts = () => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST, payload: [] });

    try {
      const { data } = await axios("/api/products");
      console.log(data);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
export const detailProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: [] });

    try {
      const { data } = await axios(`/api/products/${id}`);
      console.log(data);
      dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
