import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <nav className="flex justify-between p-4 text-black bg-yellow-400">
            <a href="#" className="font-semibold">MR WEB</a>
            <ul className="flex">
                <li className="px-5"><a href="#">Páginas Webs</a></li>
                <li className="px-5"><a href="#">Servicios de Email</a></li>
                <li className="px-5"><a href="#">Sign In</a></li>    
                <li className="px-5"><a href="#"><CartWidget/></a></li>        
                   
            </ul>
        </nav>

    )
}

export default NavBar