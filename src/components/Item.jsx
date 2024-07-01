import { Link } from "react-router-dom"

function Item({product}){
    return(

                    <div className="max-w-md rounded shadow-lg">
                        <div className="w-full h-64">
                        <img src={product.image} alt={product.title} className="object-cover w-64"/>
                        </div>  
                        <div className="h-32 px-6 py-4">
                            <p className="text-base text-gray-700">{product.description}</p>
                        </div>
                        <div className="h-20 px-6">   
                            <h2 className="mb-2 text-xl font-bold uppercase">{product.title}</h2>
                            <h4 className="text-gray-500">{product.category}</h4>
                        </div>
                        
                        <div className="flex items-center justify-between px-6 py-4">
                        <p className="text-xl font-bold text-gray-900">$ {product.price}</p> 
                        <Link to={`/item/${product.id}`} className="px-4 py-2 font-bold text-white uppercase bg-blue-500 rounded hover:bg-blue-700"> Ver más</Link>
                        </div>
                        
                    </div>
        
    )
}

export default Item