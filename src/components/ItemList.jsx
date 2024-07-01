import Item from "./Item"

function ItemList ({products}){
    return(
            <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {products.length > 0 && 
                products.map((product)=>{
                    return(

                        <Item key={product.id} product = {product}/> 
                    )
                })
                
                }
            </div>
    )
}

export default ItemList