import { useEffect, useState } from 'react'
import { getProducts } from '../asyncMock'
import { Link } from 'react-router-dom'
import './Tienda.css'
// import { getRate } from '../../utils/getRate'


const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((products) => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p className="" >Cargando...</p>

    return <section className="tienda container" >
        <div className="row align-items-center">
            <h1 className="greetingTienda">
                Tienda
            </h1>
            {products.map(({ id, nombre, categoria, unidades, precio, img }) => (
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
            ))}
        </div>
    </section>
}

export default Products