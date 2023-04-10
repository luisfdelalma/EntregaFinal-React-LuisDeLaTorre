import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartDetail from './CartDetail';
import OrderForm from './OrderForm';

const Cart = () => {

    const { carritoCheck, agregarCarrito, quitarCarrito, vaciarCarrito, cantidadProductos, total, carrito, disminuirCarrito } = useContext(CartContext)

    console.log(carrito);

    return (
        carrito.length === 0 ?
            (
                <div class="container-fluid">
                    <div class="alert alert-danger" role="alert">
                        No se han agregado productos al carrito
                    </div>
                </div>
            )
            :
            (
                <div>
                    <div class="container" style={{display:"flex"}}>
                        <div class="col-6" style={{display:"flex", justifyContent:"center"}}><h1>Descripción</h1></div>
                        <div class="col-2"><h1>Subtotal</h1></div>
                        <div class="col-4"><h1>Modificar cantidad</h1></div>
                    </div>

                    <div class="container">
                        <div class="col">
                            <div class="row">
                                {carrito.map((item) => <CartDetail key={item.id} producto={item}/>)}
                            </div>
                        </div>
                    </div>

                    <div class="container" style={{display:"flex"}}>
                        <div class="col-6" style={{display:"flex", justifyContent:"end"}}><h1>Total:</h1></div>
                        <div class="col-2"><h1>${total().toFixed(2)}</h1></div>
                        <div class="col-4"></div>
                    </div>

                    <div>
                        <OrderForm/>
                    </div>

                </div>
            )
    )
}

export default Cart