import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCartCount = ({ onAdd }) => {

    const [cantAdd, setCantAdd] = useState(1)


    return (
        <div>

            <h5 style={{ marginTop: "50px" }}>Cantidad:</h5>
            <h2>{cantAdd}</h2>

            <div class="btn-group" role="group" aria-label="Basic example" style={{ width: "150px" }}>
                <button type="button" class="btn btn-danger" onClick={() => cantAdd == 0 ? cantAdd === 0 : setCantAdd(cantAdd - 1)}>- </button>
                <button type="button" class="btn btn-danger" onClick={() => setCantAdd(cantAdd + 1)}>+</button>
            </div>

            <button type="button" class="btn btn-secondary" style={{ display: "block", marginTop: "5px", width: "150px" }} onClick={() => onAdd(cantAdd)}>Agregar al carrito</button>

            <Link to={"/cart"}>
                <button type="button" class="btn btn-success" style={{ display: "block", marginTop: "5px", width: "150px"}}  onClick={() => onAdd(cantAdd)}>Agregar y pagar</button>
            </Link>

        </div>
    )
}

export default ItemCartCount