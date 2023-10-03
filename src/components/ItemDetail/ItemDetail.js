import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, categoria, unidades, precio, img }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

    return (
        <article className='CardIt'>

            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <div className='cuerpoItem'>
                <figure>
                    <img src={`/img/${img}`} alt={nombre} className='ItemImag' />
                </figure>
                <section className='infoItem'>
                    <p className='categoriaItem'>
                        {categoria}
                    </p>
                    <p className='Info'>
                        ID: {id}
                    </p>
                    <p className='Info'>
                        Stock disponible: {unidades}
                    </p>
                    <p className='precioItem'>
                        Precio: ${precio}
                    </p>
                    
                </section>
                <footer className='ItemFooter'>
                    {
                        quantityAdded > 0 ? (
                            <button type="button" className="btn btn-warning">
                            <Link to='/cart' className='Option'>Ver carrito</Link></button>
                        ) : (
                            <ItemCount initial={1} stock={unidades} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail