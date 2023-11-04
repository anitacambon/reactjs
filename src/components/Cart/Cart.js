import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, totalEnCarrito } = useContext(CartContext)
    return (
        <div className="cart">
            {cart.length
                ? <div>

                    {cart.map(i => <CartItem key={i.id} {...i} />)}
                    <h4>Total: ${totalEnCarrito()} </h4>

                    <div>
                        <Link to='/checkout' className="OptionFC btn btn-outline-dark">Finalizar compra</Link>
                    </div>
                </div>
                : <div>
                    <h3>Tu carrito está vacío</h3>
                    <Link to='/ver-todo' className="btn btn-dark">Ir a la tienda</Link>
                </div>}







        </div>
    )
}

export default Cart