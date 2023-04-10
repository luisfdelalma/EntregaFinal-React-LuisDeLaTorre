import React, { useContext } from 'react'
import ItemCartCount from './ItemCartCount';
import { CartContext } from './CartContext';

const ItemDetail = ({ prod }) => {

    const { agregarCarrito} = useContext(CartContext)
    console.log(prod);

    const onAdd = (cantidadAgregar) =>{
        agregarCarrito (prod, cantidadAgregar)
    }

    if (prod.CategoryId === "Accesorio") {
        return (
            <div>
                <div class="container" style={{ marginTop: "50px" }}>
                    <div class="row">
                        <div class="col">
                            <div class="card text-center" style={{ width: "350px" }}>
                                <img src={prod.imgurl} class="card-img-top" alt={prod.TipoId + " " + prod.marca + " " + prod.referencia} />
                                <div class="card-body">
                                    <h5 class="card-title">{prod.TipoId} {prod.marca}</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <h1>{prod.TipoId} {prod.marca}</h1>
                                <h2>{prod.referencia}</h2>
                                <h3>Últimas unidades!</h3>
                                <h5>Precio: ${prod.precio}</h5>

                                <ItemCartCount id={prod.id} onAdd={onAdd}/>

                                <h4 style={{ marginTop: "30px" }}>Métodos de pago:</h4>
                                <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{ height: "100px", width: "200px", display: "flex", justifyContent: "center" }}>
                                    <div class="carousel-inner " style={{ height: "100px", width: "150px", justifyItems: "center" }}>
                                        <div class="carousel-item active data-bs-interval=1000">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsjEHEGdiC8ydeMMsu8pkuD5LfqebcLBOTgO14GwP7GhBilzf9kzZpCf2VkCxkBWuSj8&usqp=CAU" class="d-block w-100" style={{ height: "100px", width: "150px" }} />
                                        </div>
                                        <div class="carousel-item data-bs-interval=1000">
                                            <img src="https://logowik.com/content/uploads/images/visa-payment-card1873.jpg" class="d-block w-100" style={{ height: "100px", width: "150px" }} />
                                        </div>
                                        <div class="carousel-item data-bs-interval=1000">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" class="d-block w-100" style={{ height: "100px", width: "150px" }} />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                <div class="container" style={{ marginTop: "50px" }}>
                    <div class="row">
                        <div class="col">
                            <div class="card text-center" style={{ width: "350px" }}>
                                <img src={prod.imgurl} style={{ height: "250px", width: "300px", marginLeft: "5%", marginTop: "5%" }} class="card-img-top" alt={prod.TipoId + " " + prod.marca + " " + prod.referencia} />
                                <div class="card-body">
                                    <h5 class="card-title"> <b> Características </b></h5>
                                    <p class="card-text" style={{ marginTop: "30px", marginBottom: "2px" }}> <b>Categoría: </b>{prod.TipoId} </p>
                                    <p class="card-text" style={{ marginBottom: "2px" }}> <b>Cilindraje: </b>{prod.cilindraje} c.c. </p>
                                    <p class="card-text" style={{ marginBottom: "2px" }}> <b>Potencia: </b>{prod.cilindraje} HP</p>
                                    <p class="card-text" style={{ marginBottom: "2px" }}> <b>Torque: </b>{prod.torque} Nm</p>
                                    <p class="card-text" style={{ marginBottom: "2px" }}> <b>Sistema ABS: </b>{prod.sisAbs}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <h1>{prod.TipoId} {prod.marca}</h1>
                                <h2>{prod.referencia}</h2>
                                <h3>Últimas unidades!</h3>
                                <h5>Precio: ${prod.precio}</h5>

                                <ItemCartCount id={prod.id} onAdd={onAdd}/>

                                <h4 style={{ marginTop: "30px" }}>Métodos de pago:</h4>

                                <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{ height: "100px", width: "200px", display: "flex", justifyContent: "center" }}>
                                    <div class="carousel-inner " style={{ height: "100px", width: "150px", justifyItems: "center" }}>
                                        <div class="carousel-item active data-bs-interval=1000">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsjEHEGdiC8ydeMMsu8pkuD5LfqebcLBOTgO14GwP7GhBilzf9kzZpCf2VkCxkBWuSj8&usqp=CAU" class="d-block w-100" style={{ height: "100px", width: "150px" }} />
                                        </div>
                                        <div class="carousel-item data-bs-interval=1000">
                                            <img src="https://logowik.com/content/uploads/images/visa-payment-card1873.jpg" class="d-block w-100" style={{ height: "100px", width: "150px" }} />
                                        </div>
                                        <div class="carousel-item data-bs-interval=1000">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" class="d-block w-100" style={{ height: "100px", width: "150px" }} />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetail