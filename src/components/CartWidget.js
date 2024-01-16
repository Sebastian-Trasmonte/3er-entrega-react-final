import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartContext } from "../storage/ContextProvider";

function CartWidget() {
    const { ObtenerContadorDeCarrito } = useContext(cartContext);
    
    return (
        <div>
            <AiOutlineShoppingCart />
            {ObtenerContadorDeCarrito()}
        </div>
    )
}
export default CartWidget