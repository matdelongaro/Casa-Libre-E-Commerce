import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function Carrito(){
    
    const {carrito, precioTotal , vaciarCarrito, envio, totalCompra, eliminarProducto, producto } = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito()
    }
    
   
    
    return(
        <div className="justify-center max-w-md min-h-full m-12 mx-auto border-2 border-solid rounded border-blue-950 ">
            <h1 className="p-4 text-xl font-bold text-left bg-gray-200 ">Detalle de la compra</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className="flex flex-col justify-center max-w-md min-h-full m-3 mx-auto ">
                           
                            <div className="px-3 ">
                                <h2 className="text-xl">{prod.title}</h2>
                                <div>
                                    <div className="flex justify-between"><p className="min-w-40">Precio por unidad:</p><p> $ {prod.price}</p></div>
                                    <div className="flex justify-between"><p className="min-w-40">Unidades:</p> <p>{prod.cantidad}</p> </div> 
                                    <div className="flex justify-between"><p className="min-w-40">Precio total :</p> <p>${prod.price * prod.cantidad}</p></div>
                                    
                                </div>
                            </div>
                        
                        
                        
                        

                    </div>
                    
                    
                   

                ))
                
            }

                { carrito.length > 0 ? 
                <div className="flex flex-col justify-center max-w-md m-3 mx-auto ">
                    <button onClick={handleVaciar} className="px-4 py-2 font-bold text-center">Vaciar Carrito</button>
                    <div className="p-4 my-4 font-semibold text-left bg-gray-200">
                        <div className="my-2">
                            <div className="flex justify-between"><p>Subtotal: $ </p><p>$  {precioTotal()}</p></div>
                            <div className="flex justify-between"><p>Costo de envío :</p> <p>$  {envio ()}</p></div>
                            <div className="flex justify-between"><p>Total de la compra</p> <p>$ {totalCompra()}</p></div>
                        </div>
                        
                        
                        
                       
                    </div>
                    <button><Link to="/checkout" className="px-4 py-2 font-bold text-white uppercase rounded bg-blue-950 hover:bg-blue-900">Finalizar compra</Link></button>
                    
                    
                    
                </div> : 
                <div className="flex flex-col justify-center max-w-md min-h-full m-12 mx-auto " >
                    <img className="w-64 mx-auto" src="../img/carrito.png" alt="shopping-cart"/>
                    <p className="px-4 py-2 my-6 font-bold text-center ">El Carrito está vacío :(</p> 
                    <button><Link to="/" className="w-10 px-4 py-2 font-bold text-white uppercase rounded bg-blue-950 hover:bg-blue-900">Continuar comprando</Link></button>
                </div>
                }

                
        </div>
    )
}

export default Carrito