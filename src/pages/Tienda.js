import { useEffect, useState } from 'react'
import { getProducts } from '../asyncMock'
import { Link } from 'react-router-dom'
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

    return <section className="" >
        {products.map(({ id, nombre, categoria, unidades, precio, img }) => (
            <article key={id} className="flex mb-4 border-gray-200 shadow-sm rounded-md overflow-hidden p-2">
                <picture className="border-r-2 pr-3 mr-3 w-[200px] min-w-[200px] max-w-[200px] flex flex-col justify-center items-center">
                    <img src={`/img/${img}`}  alt={nombre} className="imagenTienda" />
                </picture>
                <div className="flex flex-col gap-2 py-8">
                    <h3 className="font-bold text-2xl">{nombre}</h3>
                    <span className="bg-indigo-700 text-white self-start py-0.5 px-3 rounded-md text-sm">{categoria}</span>
                    <span className="bg-indigo-700 text-white self-start py-0.5 px-3 rounded-md text-sm">{unidades}</span>
                    <strong className="mb-4">${precio}</strong>
                    <Link to={`/products/${id}`} className="border-2 border-indigo-700 text-indigo-700 px-4 py-0.5 w-[120px] rounded-md text-sm">
                        Ver más...
                    </Link>
                </div>
            </article>
        ))}
    </section>
}

export default Products