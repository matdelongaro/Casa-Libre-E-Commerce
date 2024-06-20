import ItemCount from "./ItemCount"

function ItemList ({products}){
    return(
            <div className="grid grid-cols-4 gap-4">
                {products.length > 0 && 
                products.map((product)=>{
                    return(

                        <ItemCount key={product.id} product = {product}/> 
                    )
                })
                
                }
            </div>
    )
}

export default ItemList