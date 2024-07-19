import { useContext, useState } from "react"
import { useForm } from 'react-hook-form'
import { CartContext } from "../context/CartContext"
import { collection, addDoc  } from "firebase/firestore"
import { db } from "../firebase/data"
import { Link } from "react-router-dom"


function Checkout() {


    const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext)
    const {register, handleSubmit} = useForm()
    const[ compraId , setCompraId] = useState("")

    const pagar = (data) => {
        const compra = {
            cliente : data,
            productos : carrito,
            total : totalCompra()
        }
       

        const compraFinal = collection(db, "detalle")

        addDoc(compraFinal , compra)
        .then((doc) => {
            setCompraId(doc.id)
            vaciarCarrito([])
        })
    }

    if(compraId){
        return(
            <div className="flex flex-col">
                <div className="justify-center max-w-md min-h-full m-12 mx-auto text-center border-2 border-solid rounded bg-blue-950 border-blue-950">
                    <p className="my-4 text-xl font-bold text-white">¡Tu compra se realizó con éxito!</p>
                    <div className="flex flex-col"><p className="my-4 text-xl text-center text-white ">Tu código es: </p> <span className="w-64 p-2 mx-auto text-lg bg-white rounded text-blue-950">{compraId}</span></div>
                    <p className="my-4 text-xl text-white">Muéstraselo al repartidor al momento de la entrega.</p>
                </div>
                <button><Link to="/" className="w-10 px-4 py-2 font-bold text-white uppercase rounded bg-blue-950 hover:bg-blue-900">Volver al sitio</Link></button>
            </div>
            
        )
    }
    
 
    

    return(
        <div className="flex flex-col max-w-md min-h-full m-12 mx-auto border-2 border-solid rounded border-blue-950">
            <h1 className="p-4 text-xl font-bold text-left bg-gray-200 ">Detalle de tu compra</h1>
            <form onSubmit={handleSubmit(pagar)} className="flex flex-col gap-1 p-3 my-4" >
                <input className="p-2 border-2 border-gray-300 border-solid focus:ring-1 focus:ring-inset focus:ring-blue-950" type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
                <input className="p-2 border-2 border-gray-300 border-solid" type="email" placeholder="Ingresa tu email" {...register("email")} />
                <input className="p-2 border-2 border-gray-300 border-solid" type="phone" placeholder="Ingresa tu telefono" {...register("phone")}/>
                <button type="submit" className="px-4 py-2 m-4 font-bold text-white uppercase rounded bg-blue-950 hover:bg-blue-900">Pagar</button>
            </form>
            
        </div>
    )
}

export default Checkout