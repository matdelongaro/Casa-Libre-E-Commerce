import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

function ItemDetail({item}){

    const {carrito, addToCart} = useContext(CartContext)



    const [cantidad , setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    } 
    
    return(
            <div className="max-w-md mx-auto my-6 bg-white rounded shadow-lg">
                        <div className="w-full h-64">
                        <img src={item.image} alt={item.title} className="object-cover w-64 p-4 mx-auto"/>
                        </div>  
                        <div className="h-32 px-6">
                            <p className="text-base text-gray-700">{item.description}</p>
                        </div>
                        <div className="flex flex-col h-20">   
                            <p className="mb-2 text-xl font-bold text-center uppercase">{item.title}</p>
                            <p className="text-center text-gray-500">{item.category}</p>
                        </div>
                    
                        <p className="text-xl font-bold text-center text-gray-900">$ {item.price}</p> 
                        
                    
                        <ItemCount 
                        carrito = {carrito}
                        cantidad = {cantidad}
                        handleSumar = {handleSumar}
                        handleRestar = {handleRestar}
                       handleAgregar = {() => {addToCart (item, cantidad)}}
                        />
                    </div>
    )
}

export default ItemDetail