import { Link } from "react-router-dom"

function Item({product}){
    return(

                    <div className="max-w-md rounded shadow-lg">
                        <div className="w-full h-64">
                        <img src={product.image} alt={product.title} className="object-cover w-64"/>
                        </div>  
                        <div className="px-6 py-4 h-32">
                            <p className="text-gray-700 text-base">{product.description}</p>
                        </div>
                        <h2 className="uppercase font-bold text-xl mb-2">{product.title}</h2>
                        <h4>{product.category}</h4>
                        <div className="px-6 py-4 flex items-center justify-between">
                        <p className="font-bold text-xl text-gray-900">$ {product.price}</p> 
                        <Link to={`/item/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"> Ver más</Link>
                        </div>
                        
                    </div>
        
    )
}

export default Item