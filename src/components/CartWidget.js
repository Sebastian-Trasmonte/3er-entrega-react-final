import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartContext } from "../storage/ContextProvider";
import { Link } from "react-router-dom";

function CartWidget() {
    const { ObtenerContadorDeCarrito } = useContext(cartContext);
    
    return (
         <>
         <Link to="/cart">
         <AiOutlineShoppingCart />
               {ObtenerContadorDeCarrito()}
         </Link>
   </>
    )
}
export default CartWidget