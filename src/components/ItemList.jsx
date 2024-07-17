import Item from "./Item"

function ItemList ({productos}){
    return(
            <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {productos.length > 0 && 
                productos.map((product)=>{
                    return(

                        <Item key={product.id} product = {product}/> 
                    )
                })
                
                }
            </div>
    )
}

export default ItemList