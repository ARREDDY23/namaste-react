import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const deleteCart = () => {
        dispatch(clearCart());
    };
    return(
        <div className="text-center w-6/12 mx-auto">
            <h1>Cart .....</h1>
            <button onClick={deleteCart}>Clear Cart</button>
            <ItemList items={cartItems}/>
        </div>
    )
}

export default Cart;