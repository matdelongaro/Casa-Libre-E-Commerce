import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

function ItemDetail({item}){
    return(
            <div className="max-w-md rounded shadow-lg mx-auto py-3">
                        <div className="w-full h-64">
                        <img src={item.image} alt={item.title} className="object-cover w-64 mx-auto"/>
                        </div>  
                        <div className="px-6 py-4 h-32">
                            <p className="text-gray-700 text-base">{item.description}</p>
                        </div>
                        <h2 className="uppercase font-bold text-xl mb-2">{item.title}</h2>
                        <h4>{item.category}</h4>
                        <div className="px-6 py-4 flex items-center justify-between">
                        <p className="font-bold text-xl text-gray-900">$ {item.price}</p> 
                        <Link to={`/item/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"> Agregar al Carrito</Link>
                        </div>
                        <ItemCount />
                    </div>
    )
}

export default ItemDetail