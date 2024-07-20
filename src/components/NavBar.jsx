import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useState } from "react"



function NavBar(){
    
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav>
            <NavLink to="/" className="nav_logo"  onClick={() => { setIsOpen(false);}}>Casa Libre</NavLink>
            <ul className={`nav_items ${isOpen && "open"}`}>
                <li  onClick={() => { setIsOpen(false);}}><NavLink to="/electrodomesticos">Todos los productos</NavLink></li>
                <li  onClick={() => { setIsOpen(false);}}><NavLink to="/electrodomesticos/cocina">Cocina</NavLink></li>
                <li  onClick={() => { setIsOpen(false);}}><NavLink to="/electrodomesticos/lavanderia">Lavandería</NavLink></li>
                <li  onClick={() => { setIsOpen(false);}}><NavLink to="/electrodomesticos/climatizacion">Climatización</NavLink></li>
                <li  onClick={() => { setIsOpen(false);}}><NavLink to="/signin">Sign In</NavLink></li>    
                <li  onClick={() => { setIsOpen(false);}}><NavLink to="/carrito"><CartWidget/></NavLink></li>   
            </ul>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span ></span>
                <span ></span>
                <span ></span>
            </div>
        </nav>

    )
}

export default NavBar