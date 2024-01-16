import { useState } from "react";

function BotonesCarrito({ModificarCarrito}) {

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
                <button onClick={AgregarAlCarrito}>+</button>
                <span>{cantidad}</span>
                <button onClick={QuitarDelCarrito}>-</button>
                <button onClick={() => ModificarCarrito(cantidad)}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default BotonesCarrito;