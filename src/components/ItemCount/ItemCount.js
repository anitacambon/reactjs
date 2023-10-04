import '../ItemCount/ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='btn btn-dark' onClick={restar}>-</button>
                <h4 className='Number'> {count} </h4>
                <button className='btn btn-dark' onClick={sumar}>+</button>
            </div>
            <div>
                <button className='btn btn-dark'  disabled={count === 0} onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )

}

export default ItemCount