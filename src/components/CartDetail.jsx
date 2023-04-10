import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const CartDetail = ({ producto }) => {
    const { disminuirCarrito, aumentarCarrito } = useContext(CartContext)
    return (
        <div class="container" style={{ display: "flex", alignItems: "center" }}>
            <div class="col-6" style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>

                <img src={producto.imgurl} alt="" style={{ height: "100px", width: "100px", marginRight: "10px" }} />
                <div>
                    <h5 style={{ marginBottom: "3px" }}>{producto.TipoId} {producto.marca} {producto.referencia}</h5>
                    <div><p style={{ marginBottom: "1px" }}>Cantidad: <b>{producto.quantity}</b></p></div>
                    <div><p>Precio unitario: ${producto.precio}</p></div>
                </div>

            </div>

            <div class="col-2">
                <h5>|Subtotal: ${(producto.precio * producto.quantity).toFixed(2)}</h5>
            </div>

            <div class="col-4" style={{display:"flex"}}>
                <div class="btn-group" role="group" aria-label="Basic example" style={{ width: "150px",display:"flex" }}>
                    <button type="button" class="btn btn-danger" onClick={() => disminuirCarrito(producto)}>-</button>
                    <button type="button" class="btn btn-danger" onClick={() => aumentarCarrito(producto)}>+</button>
                </div>
            </div>

        </div>
    )
}

export default CartDetail