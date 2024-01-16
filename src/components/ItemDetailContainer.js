import { useNavigate, useParams } from "react-router-dom"
import ArregloArticulos from "../asserts/articulos"
import "bulma/css/bulma.css"
import "../Styles.css"
import { useContext, useEffect, useState } from "react"
import BotonesCarrito from "./ButtonsCart"
import Toastify from 'toastify-js';
import { cartContext } from "../storage/ContextProvider"
import "toastify-js/src/toastify.css"

const imgArts = require.context("../img/")

function ItemDetailtContainer() {
    const { idProducto } = useParams()
    const [articulo, setArticulo] = useState()
    const { AgregarCalzado } = useContext(cartContext);

    const navigateTo = useNavigate()

    useEffect(() => {
        if (idProducto) {
            const productoFiltrado = FiltroArticulo(idProducto)
            setArticulo(productoFiltrado)
        } else {
            navigateTo("*")
        }
    }, [idProducto])

    function FiltroArticulo(idProducto) {
        return ArregloArticulos.find((articulo) => articulo.id == idProducto)
    }

    function ModificarCarrito(cantidad) {
        Toastify({
            text: "Agregaste la zapatilla ${articulo.modelo} X ${cantidad}",
            duration: 1500,
            gravity: "bottom",
            position: "center",
        }).showToast();
        articulo.cantidad = cantidad;
        AgregarCalzado(articulo);
    }

    return (
        articulo ? (< div >
            <div className="columns">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={imgArts(`./${articulo.imagen}`)} alt="imagen de calzado" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{articulo.modelo}</p>
                                <p class="title is-5">$ {articulo.precio}</p>
                            </div>
                        </div>
                <BotonesCarrito ModificarCarrito={ModificarCarrito}/>
                    </div>
                </div>
            </div>
        </div >) : (<div>Cargando...</div>)
    )
}

export default ItemDetailtContainer