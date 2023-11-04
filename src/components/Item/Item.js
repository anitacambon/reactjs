import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, nombre, categoria, unidades, precio, img }) => {
    return (
        <section className="tienda" >
            
                <article key={id} className="CardItem">
                    <picture>
                        <img src={`/img/${img}`} alt={nombre} className="imagenTienda" />
                    </picture>
                    <div className="infoTienda">
                        <h3 className="nombreTienda">{nombre}</h3>
                        <span className="precioTienda">${precio}</span>
                        <span className="categoriaTienda">{categoria}</span>
                        <button type="button" className="btn btn-warning"><Link to={`/products/${id}`} className="botonTienda">
                            Ver más...
                        </Link></button>
                    </div>
                </article>
            
        </section>
    )
}

export default Item
