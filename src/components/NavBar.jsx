import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <nav className="bg-yellow-400 p-4 text-black flex justify-between">
            <a href="#">MR WEB</a>
            <ul className="flex">
                <li className="px-5"><a href="#">Páginas Webs</a></li>
                <li className="px-5"><a href="#">Servicios de Email</a></li>
                <li className="px-5"><a href="#">Contacto</a></li>    
                <li className="px-5"><a href="#"><CartWidget/></a></li>        
                   
            </ul>
        </nav>

    )
}

export default NavBar