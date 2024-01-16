import { useState } from "react"
import "bulma/css/bulma.css"

function BotonesCarrito({ ModificarCarrito }) {

    const [cantidad, setcantidad] = useState(1);

    function AgregarAlCarrito() {
        setcantidad(cantidad + 1);
    }

    function QuitarDelCarrito() {
        if (cantidad > 0 && cantidad != 1) {
            setcantidad(cantidad - 1);
        }
    }

    return (
        <>
            <div>
                <button class="button is-dark" onClick={QuitarDelCarrito}>-</button>
                <span>{cantidad}</span>
                <button class="button is-dark" onClick={AgregarAlCarrito}>+</button>
                <button class="button is-dark" onClick={() => ModificarCarrito(cantidad)}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default BotonesCarrito;