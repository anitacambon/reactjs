import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, quantity, totalAPagar } = useContext(CartContext)

    if (quantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }
    return (
        <div>
            <h1>Carrito</h1>
            {cart.map(i => <CartItem key={i.id} {...i} />)}
            <h2>Total: ${totalAPagar} </h2>
            <button className="btn btn-outline-warning"><Link to='/cheackout' className="OptionFC">Finalizar compra</Link></button>
            <button onClick={() => clearCart()} className="vaciar btn btn-danger">Vaciar Carrito</button>
        </div>
    )
}

export default Cart