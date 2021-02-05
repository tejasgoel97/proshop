import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const CartScreen = ({ match, history, location }) => {
  const dispatch = useDispatch();
  const qty = location.search.split("=")[1];
  const id = match.params.id;
  console.log(id, qty);
  if (id && qty) {
    dispatch(addToCart(id, qty));
  }

  return <h1>CArt Screen</h1>;
};

export default CartScreen;
