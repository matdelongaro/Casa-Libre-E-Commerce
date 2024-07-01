import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

function ItemDetail({item}){
    return(
            <div className="max-w-md py-3 m-10 mx-auto bg-white rounded shadow-lg ma">
                        <div className="w-full h-64">
                        <img src={item.image} alt={item.title} className="object-cover w-64 mx-auto"/>
                        </div>  
                        <div className="h-32 px-6 py-4">
                            <p className="text-base text-gray-700">{item.description}</p>
                        </div>
                        <div className="h-20 px-6">   
                            <h2 className="mb-2 text-xl font-bold uppercase">{item.title}</h2>
                            <h4 className="text-gray-500">{item.category}</h4>
                        </div>
                        <div className="flex items-center justify-between px-6 py-4">
                        <p className="text-xl font-bold text-gray-900">$ {item.price}</p> 
                        <Link to={`/item/${item.id}`} className="px-4 py-2 font-bold text-white uppercase bg-blue-500 rounded hover:bg-blue-700"> Agregar al Carrito</Link>
                        </div>
                        <ItemCount />
                    </div>
    )
}

export default ItemDetail