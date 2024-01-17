const { createContext, useState } = require("react");

export const cartContext = createContext();

export default function ContextProvider(props) {
    let [carrito, modificarCarrito] = useState([]);

    function AgregarCalzado(calzadoIngresado) {
        const resultado = carrito.findIndex(calzado => calzado.id == calzadoIngresado.id);

        //-1 cuando no encuentra el resultado
        if (resultado != -1) {
            const nuevoCarrito = [...carrito]
            nuevoCarrito[resultado].cantidad = calzadoIngresado.cantidad + nuevoCarrito[resultado].cantidad;
            modificarCarrito(nuevoCarrito);
        }
        else {
            modificarCarrito([...carrito, calzadoIngresado]);
        }
    }

    function EliminarCalzado(idCalzado) {
        const resultado = carrito.findIndex(calzado => calzado.id == idCalzado);
        let nuevoCarrito = [...carrito]
        nuevoCarrito.splice(resultado, 1);
        modificarCarrito(nuevoCarrito);
    }

    function VaciarCarrito() {
        modificarCarrito([]);
    }


    const ObtenerContadorDeCarrito = () => carrito.reduce((acumulador, valorActual) => acumulador + valorActual.cantidad, 0);

    const ObtenerTotalAPagar = () => carrito.reduce((acumulador, valorActual) => acumulador + (valorActual.precio * valorActual.cantidad), 0);


    const exportarFunciones = {
        AgregarCalzado,
        EliminarCalzado,
        VaciarCarrito,
        ObtenerContadorDeCarrito,
        ObtenerTotalAPagar,
        carrito
    };

    return (
        <cartContext.Provider value={exportarFunciones}>
            {props.children}</cartContext.Provider>
    );
}