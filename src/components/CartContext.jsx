import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const carritoCheck = (id) =>{
        return (
            carrito.find((item)=> item.id === id) ? true :false
        )
    }

    const agregarCarrito = (producto, cantidad) =>{
        if (carritoCheck(producto.id)) {
            setCarrito(carrito.map((item)=>{
                return item.id === producto.id ? {...item, quantity: item.quantity + cantidad} : item
            }))
        } else {
            setCarrito([...carrito, {...producto, quantity: cantidad}])
        }
    }

        const disminuirCarrito = (producto) => {
        setCarrito(carrito.map((item) => {
            return item.id === producto.id ?
            producto.quantity > 0 ?
            {...item, quantity: item.quantity - 1} : {...item, quantity: 0} : item
        }))
    }

    const aumentarCarrito = (producto) => {
        setCarrito(carrito.map((item) => {
            return item.id === producto.id ?
            {...item, quantity: item.quantity + 1} : item
        }))
    }

    const quitarCarrito = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id))
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const cantidadProductos = () =>{
        let cantidad = 0
        carrito.forEach((item) => cantidad += item.quantity)
        return cantidad
    }

    const total = () =>{
        let total = 0
        carrito.forEach((item) =>{
            total += (item.quantity * item.precio)
        })
        return total
    }





return (
    <CartContext.Provider value={{carritoCheck, agregarCarrito, quitarCarrito, vaciarCarrito, cantidadProductos, total, carrito, disminuirCarrito, aumentarCarrito}}>
        {children}
    </CartContext.Provider>
)
}

export default CartContextProvider