import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, categoria, talle, unidades, precio, img }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={`/img/${img}`} alt={nombre} className='ItemImag' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {categoria}
                </p>
                <p className='Info'>
                    Código: {id}
                </p>
                <p className='Info'>
                    Talle: {talle}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {unidades}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={unidades} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>

        </article>
    )
}

export default ItemDetail