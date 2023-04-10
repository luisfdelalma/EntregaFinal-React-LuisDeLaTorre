import React from 'react'
import { Link } from "react-router-dom"

const ItemList = ({ prod }) => {
    console.log(prod);

    return (
        <div style={{ marginTop: "50px" }}>
            <div class="container text-center">
                <div class="row" style={{}}>
                    {
                        prod.map((item) => (



                            <div class="col" key={item.id} >

                                <div class="card" style={{ width: "300px", height: "400px", marginTop: "20px" }}>
                                    <div style={{ color: "#ffffff", height: "30px", fontSize: "25px", backgroundColor: "#D50606", lineHeight: "30px", fontStyle: "oblique" }}><b>{item.CategoryId}</b></div>
                                    <img src={item.imgurl} class="card-img-top" alt="" style={{ height: "200px", width: "200px", marginLeft: "20%", marginTop: "5%" }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.TipoId}</h5>
                                        <p class="card-text">Marca {item.marca} {item.referencia}</p>
                                        <Link to={`/producto/${item.id}` } class="btn btn-primary" style={{ width: "150px", position: "absolute", bottom: "5px", left: "75px" }}>Detalle</Link>
                                    </div>
                                </div>

                            </div>



                        )
                        ) /*Aqui acaba el map */
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemList