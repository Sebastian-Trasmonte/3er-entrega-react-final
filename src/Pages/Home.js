import "bulma/css/bulma.css"
import "../Styles.css"
import img1 from "../img/8000-AZ-STONE.jpg"
import img2 from "../img/1414-NEG-STN.jpg"
import img3 from "../img/1575-SUE.jpg"
import img4 from "../img/3911 - blanco negro - 1.png"
import { Link } from "react-router-dom"

function Home() {

    return (

        <div class="columns is-multiline is-mobile">
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={img1} alt="ejemplo zaptilla urban street" />
                        </figure>
                    </div>
                    <article class="message is-large">
                        <div class="message-header">
                            <a><Link to="Productos/Categoria/urbanStreet">URBAN STREET</Link></a>
                        </div>
                        <div class="message-body">
                            Esta categoria es para el uso diario, diseñadas para la calle y las exigencias del dia a dia, con mucha comodidad y soltura, ideales para vos
                        </div>
                    </article>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={img2} alt="Placeholder image" />
                        </figure>
                    </div>
                    <article class="message is-large">
                        <div class="message-header">
                            <a><Link to="Productos/Categoria/urbano">URBANO</Link></a>
                        </div>
                        <div class="message-body">
                            Similar a Urban Street pero con el toque de cuero caracteristico que nos distingue, utiles para culaquier ocacion y destacar.
                        </div>
                    </article>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={img3} alt="Placeholder image" />
                        </figure>
                    </div>
                    <article class="message is-large">
                        <div class="message-header">
                            <a><Link to="Productos/Categoria/premium">PREMIUM</Link></a>
                        </div>
                        <div class="message-body">
                            La categoria tope de gama de la marca, utiliza los mejores materiales para un confort destacado y una elegaciona sin igual.
                        </div>
                    </article>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={img4} alt="Placeholder image" />
                        </figure>
                    </div>
                    <article class="message is-large">
                        <div class="message-header">
                            <a><Link to="Productos/Categoria/dama">DAMA</Link></a>
                        </div>
                        <div class="message-body">
                            Pensda para ellas, en esta categoria encotraras todo lo que las damas argentinas buscan en un calzado.
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )

}

export default Home