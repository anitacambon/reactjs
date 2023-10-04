import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, totalEnCarrito, clearCart } = useContext(CartContext)

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name && !user.phone) {
            alert('Los campos son obligatorios')
        } else {
            let order = {
                user,
                items: cart,
                total: totalEnCarrito(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then(res => {
                    setOrderId(res.id)
                    clearCart()
                })
                .catch((error) => console.log(error))
        }
    }


    return (
        <div>
            {orderId !== ''
                ? <div>
                    <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
                    <h5>Su id de regristro es: {orderId} </h5>
                    <Link to='/ver-todo' className="btn btn-dark">Volver a la tienda</Link>
                </div>
                : <div>
                    <h2>Terminar compra</h2>
                    <h5>Completa con tus datos</h5>
                    <form onSubmit={finalizarCompra} className="container">
                        <div className="row">
                            <div className="mb-3">
                                <label className="form-label">Nombre completo</label>
                                <input className="form-control" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Número de teléfono</label>
                                <input className="form-control" onChange={datosComprador} type="number" placeholder="+5411000000" name="phone" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input className="form-control" onChange={datosComprador} type="email" placeholder="a@a.com" name="mail"  />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ingresar correo nuevamente</label>
                                <input className="form-control" type="email" placeholder="a@a.com" name="mail" onChange={((e) => setValidateEmail(e.target.value))} />
                            </div>
                        </div>
                        <button className="btn btn-dark" type="submit" disabled={validateEmail !== user.mail} >Generar orden</button>
                    </form>
                </div>}
        </div>


    )
}

export default Checkout