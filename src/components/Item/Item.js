
import { Link } from 'react-router-dom'
import './Item.css'
// import { getRate } from '../../utils/getRate'

const Item = ({ id, nombre, categoria, unidades, precio, img }) => {
    return (
        <section className="tienda container" >
            <div className="row align-items-center">
                <h1 className="greetingTienda">
                    Tienda
                </h1>
                <article key={id} className="CardItem col">
                    <picture>
                        <img src={`/img/${img}`} alt={nombre} className="imagenTienda" />
                    </picture>
                    <div className="infoTienda">
                        <h3 className="nombreTienda">{nombre}</h3>
                        <span className="precioTienda">${precio}</span>
                        <span className="unidadesTienda">Stock: {unidades}</span>
                        <span className="categoriaTienda">{categoria}</span>
                        <button type="button" className="btn btn-warning"><Link to={`/products/${id}`} className="botonTienda">
                            Ver más...
                        </Link></button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Item
