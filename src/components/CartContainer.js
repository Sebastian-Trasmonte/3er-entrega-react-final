import { cartContext } from "../storage/ContextProvider";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.css"

const imgArts = require.context("../img/")


function CartContainer() {
    const { carrito,VaciarCarrito, EliminarCalzado,ObtenerTotalAPagar } = useContext(cartContext);
    const navigateTo = useNavigate();

    function CrearOrden() {
        navigateTo(`/CrearOrden/`);
    }

    return (
        <>
            {carrito.length > 0 ?
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Precio por unidad</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((articulo) => (
                                <tr key={articulo.id} >
                                    <td> <img src={imgArts(`./${articulo.imagen}`)} 
                                    alt="imagen de calzado" 
                                    style={{height: '50px', width: '50px'}}
                                    /></td>                                    
                                    <td>{articulo.modelo}</td>
                                    <td>$ {articulo.precio}</td>
                                    <td>{articulo.cantidad}</td>
                                    <th>$ {articulo.cantidad * articulo.precio}</th>
                                    <td>
                                        <button className={articulo.id} onClick={() => EliminarCalzado(articulo.id)}>Eliminar Item</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total</th>
                                <th>$ {ObtenerTotalAPagar()}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <div> 
                        <button onClick={() => VaciarCarrito()}>Eliminar items</button>
                        <button onClick={() => CrearOrden()}>Finalizar carrito</button>
                    </div>
                </div>
                :
                <div>
                    <h1>Aún no tenes artículos en tu carrito</h1>                    
                </div>

            }
        </>
    )
}

export default CartContainer;