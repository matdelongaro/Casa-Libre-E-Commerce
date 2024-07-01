import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <nav className="flex justify-between p-4 text-black bg-yellow-400">
            <NavLink to="/" className="flex font-semibold">Casa Libre<img src="../public/img/brand.jpg" alt="Casa Libre" className="w-10 mx-1"/></NavLink>
            
            <ul className="flex">
                <li className="px-5"><NavLink to="/electrodomesticos">Electrodomésticos</NavLink></li>
                <li className="px-5"><NavLink to="/electrodomesticos/cocina">Cocina</NavLink></li>
                <li className="px-5"><NavLink to="/electrodomesticos/lavanderia">Lavandería</NavLink></li>
                <li className="px-5"><NavLink to="/electrodomesticos/limpieza">Limpieza</NavLink></li>
                <li className="px-5"><NavLink to="/electrodomesticos/climatizacion">Climatización</NavLink></li>
                <li className="px-5"><NavLink to="/signin">Sign In</NavLink></li>    
                <li className="px-5"><NavLink to="/carrito"><CartWidget/></NavLink></li>        
                   
            </ul>
        </nav>

    )
}

export default NavBar