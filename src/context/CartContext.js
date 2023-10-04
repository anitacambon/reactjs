import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(item => item.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    const cantidadEnCarrito = () =>{
        return cart.reduce (( acc, item) => acc + item.quantity, 0 )
    }

    const totalEnCarrito = () =>{
        return cart.reduce (( acc, item) => acc + item.quantity * item.precio, 0 )
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cantidadEnCarrito, totalEnCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
