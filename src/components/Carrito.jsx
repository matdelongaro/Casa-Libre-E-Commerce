import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function Carrito(){
    
    const {carrito, precioTotal , vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito()
    }
    return(
        <div>
            
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.title}</h2>
                        <p>Precio por unidad: $ {prod.price}</p>
                        <p>Precio total : ${prod.price * prod.cantidad}</p>
                        <p>cant: {prod.cantidad}</p>
                        


                    </div>
                    
                   

                ))
                
            }

                { carrito.length > 0 ? <div>
                    <p>Precio total: $ {precioTotal()}</p>
                    <button onClick={handleVaciar}>Vaciar Carrito</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </div> : 
                <div className="flex flex-col max-w-md m-12 mx-auto justify-center min-h-full " >
                    <img className="w-64 mx-auto" src="../img/carrito.png" alt="shopping-cart"/>
                    <p className="text-center px-4 py-2 my-6 font-bold ">El Carrito está vacío :(</p> 
                    <button><Link to="/" className="px-4 py-2 w-10 font-bold text-white uppercase bg-blue-950 rounded hover:bg-blue-900">Continuar comprando</Link></button>
                </div>
                }

                
        </div>
    )
}

export default Carrito