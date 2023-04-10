import React, { useState, useContext, useEffect } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from './CartContext'



export const OrderForm = () => {

    const { carrito, total, vaciarCarrito } = useContext(CartContext)
    const [clienteNombre, setClienteNombre] = useState('')
    const [clienteTelefono, setClienteTelefono] = useState('')
    const [clienteEmail, setClienteEmail] = useState('')
    const [clienteEmailConfirmado, setClienteEmailConfirmado] = useState('')
    const [compraRealizada, setCompraRealizada] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [ordenId, setOrdenId] = useState('')
    const dataBase = getFirestore();
    const ordenes = collection(dataBase, 'orders');


    const enviarCompra = (e) => {
        e.preventDefault();
        const orden = {
            buyer: {
                name: clienteNombre,
                phone: clienteTelefono,
                email: clienteEmail
            },
            items: carrito,
            total: total()
        };

        addDoc(ordenes, orden)
            .then((docRef) => {
                setCompraRealizada(true)
                setOrdenId(docRef.id)
                // Para simular el reseteo sin que haga falta recargar la pagina, despues de 7 segundos se vacia el array del carrito asi se puede volver a probar todas las funcionalidades
                setTimeout(() => {
                    vaciarCarrito()
                }, 10000);
            })
    }

    const confirmarMail = () => {
        if (clienteEmail.length == 0) {
            setDisabled(true)
        } else {
            clienteEmail === clienteEmailConfirmado ? setDisabled(false) : setDisabled(true)
        }
    }

    useEffect(() => {

        confirmarMail()

    }, [clienteEmail, clienteEmailConfirmado])

    return (
        compraRealizada ?
            <div style={{display:"flex", justifyContent:"center", marginBottom:"100px", marginTop:"50px"}}>
                <div class="card" style={{ display: "flex", width: "400px"}}>
                <p>Muchas gracias por su compra!!!</p>
                <p>Puede seguir su orden de compra con el siguiente número: <br /><span>{ordenId}</span></p>
                <p>Este mensaje se cerrará en 10 segundos, por favor guarde su numero de rastreo</p>
                </div>
            </div>
            :
            <div style={{display:"flex", justifyContent:"center", marginBottom:"100px", marginTop:"50px"}}>
                <div class="card" style={{ display: "flex", width: "400px"}}>
                    <form onSubmit={enviarCompra} style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>

                    <div class="row" style={{marginLeft:"0px", marginBottom:"20px"}}>
                        <h2>Confirme su compra</h2>
                    </div>

                        <div class="row" style={{marginLeft:"0px", marginBottom:"20px"}}>
                        <label>
                            Nombre:<br />
                            <input style={{width:"250px"}} required type="text" value={clienteNombre} onChange={(e) => setClienteNombre(e.target.value)} />
                        </label>
                        </div>

                        <div class="row" style={{marginLeft:"0px", marginBottom:"20px"}}>
                        <label>
                            Teléfono:<br />
                            <input style={{width:"250px"}} required type="text" value={clienteTelefono} onChange={(e) => setClienteTelefono(e.target.value)} />
                        </label>
                        </div>

                        <div class="row" style={{marginLeft:"0px", marginBottom:"20px"}}>
                        <label>
                            Email:<br />
                            <input style={{width:"250px"}} required type="email" value={clienteEmail} onChange={(e) => setClienteEmail(e.target.value)} />
                        </label>
                        </div>

                        <div class="row" style={{marginLeft:"0px", marginBottom:"20px"}}>
                        <label>
                            Confirmar Email:<br />
                            <input style={{width:"250px"}} required type="email" value={clienteEmailConfirmado} onChange={(e) => setClienteEmailConfirmado(e.target.value)} />
                        </label>
                        </div>

                        {!disabled &&
                            <div class="row" style={{width:"200px", marginLeft:"auto", marginRight:"auto", marginBottom:"20px"}}>
                            <button class="btn btn-success" type="submit">Realizar compra</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
    )
}

export default OrderForm