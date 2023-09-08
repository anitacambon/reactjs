import { Link } from "react-router-dom"


const Item = ({ id, nombre, categoria, talle, unidades, precio, img }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImag' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p> 
                <p className='Info'>
                    Stock disponible: {unidades}
                </p> 
            </section>
            <footer>
                <Link to={ `/item/${id}` } className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item