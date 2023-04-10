import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const NavBar = () => {
    const { cantidadProductos } = useContext(CartContext)
    return (
        <div>

            <nav style={{ backgroundColor: "#D50606", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ul className="nav justify-content-center" style={{}}>
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link" style={{ color: "#ffffff" }}>TodoMotos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/productos/Moto"} className="nav-link" style={{ color: "#ffffff" }}>Motos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/productos/Accesorio"} className="nav-link" style={{ color: "#ffffff" }}>Accesorios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Cart"}>
                            <button type="button" class="btn btn-light position-relative" style={{ height: "35px" }}>
                                Carrito
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                        {cantidadProductos()}
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                
                            </button>
                        </Link>

                    </li>
                </ul>
            </nav>

            <div style={{ height: "200px", width: "100%", backgroundImage: "url(https://wallpapers-hub.art/wallpaper-images/4447.jpg)", backgroundPosition: "center", backgroundSize: "contain", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontSize: "150px", color: "#ffffff", fontStyle: "oblique" }} >Todo Motos</h1>
            </div>
        </div>
    )
}

export default NavBar