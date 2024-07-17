import { useContext, useState } from "react"
import { useForm } from 'react-hook-form'
import { CartContext } from "../context/CartContext"
import { collection, addDoc  } from "firebase/firestore"
import { db } from "../firebase/data"


function Checkout() {


    const {carrito, precioTotal , vaciarCarrito} = useContext(CartContext)
    const {register, handleSubmit} = useForm()
    const[ compraId , setCompraId] = useState("")

    const pagar = (data) => {
        const compra = {
            cliente : data,
            productos : carrito,
            total : precioTotal()
        }
        console.log(compra)

        const compraFinal = collection(db, "detalle")

        addDoc(compraFinal , compra)
        .then((doc) => {
            setCompraId(doc.id)
            vaciarCarrito([])
        })
    }

    if(compraId){
        return(
            <div>
                <p>Muchas gracias por tu compra</p>
                <p>Tu numero de compra es : {compraId}</p>
            </div>
        )
    }
    
 
    

    return(
        <div>
            <h1>Detalle de tu compra</h1>
            <form onSubmit={handleSubmit(pagar)} >
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
                <input type="email" placeholder="Ingresa tu email" {...register("email")} />
                <input type="phone" placeholder="Ingresa tu telefono" {...register("phone")}/>
                <button type="submit">Pagar</button>
            </form>
        </div>
    )
}

export default Checkout