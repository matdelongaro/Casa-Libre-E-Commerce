import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Carrito(){
    
    const {carrito, precioTotal , vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito()
    }
    return(
        <div>
            <h1>Carrito</h1>
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
                </div> : <p>El Carrito está vacío</p>}
                
        </div>
    )
}

export default Carrito