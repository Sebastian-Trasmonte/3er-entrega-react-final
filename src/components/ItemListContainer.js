import { Link, useParams } from "react-router-dom"
import ArregloArticulos from "../asserts/articulos"
import "bulma/css/bulma.css"
import "../Styles.css"
import React, { useEffect } from "react"

const imgArts = require.context("../img/")

function ItemListContainer() {
    const { categoria } = useParams()

    const [articulos, setArticulos] = React.useState([])

    useEffect(() => {
        if (categoria) {

            const categoriasFiltradas = FiltroCategoria(categoria)
            setArticulos(categoriasFiltradas)

        } else {

            setArticulos(ArregloArticulos)
        }



    }, [categoria])

    function FiltroCategoria(categoria) {

        return ArregloArticulos.filter((articulo) => articulo.categoria == categoria)

    }

    return (

        <div>
            <div className="columns">
                {articulos.map((producto) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={imgArts(`./${producto.imagen}`)} alt="imagen de calzado" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{producto.modelo}</p>
                                    </div>
                                </div>
                                <Link to={`/Productos/id/${producto.id}`}>Mas info</Link>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )

}

export default ItemListContainer