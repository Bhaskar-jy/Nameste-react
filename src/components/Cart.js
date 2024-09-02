import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
