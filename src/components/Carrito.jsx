import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function Carrito(){
    
    const {carrito, precioTotal , vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito()
    }
    return(
        <div className="border-solid border-2 border-blue-950 max-w-md m-12 mx-auto justify-center min-h-full rounded">
            <h1 className="text-left text-xl font-bold p-4">Detalle de la compra</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className="flex flex-col max-w-md m-3 mx-auto justify-center min-h-full ">
                        
                        <div className="p-3">
                            <h2>{prod.title}</h2>
                            <p>Precio por unidad: $ {prod.price}</p>
                            <p>Precio total : ${prod.price * prod.cantidad}</p>
                            <p>cant: {prod.cantidad}</p>
                            <button onClick={handleVaciar} className="text-center px-4 py-2 my-6 font-bold">Vaciar Carrito</button>
                        </div>

                    </div>
                    
                   

                ))
                
            }

                { carrito.length > 0 ? 
                <div className="flex flex-col max-w-md m-3 mx-auto justify-center ">
                    <div className="p-3 ">
                        <p>Total del carrito</p>
                        <p>Subtotal: $ {precioTotal()}</p>
                        <input type="text" placeholder="Introduzca cupón de descuento"/>
                        <p>Envío : $ </p>
                    </div>
                    
                    
                    <button><Link to="/checkout" className="px-4 py-2 font-bold text-white uppercase bg-blue-950 rounded hover:bg-blue-900">Finalizar compra</Link></button>
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