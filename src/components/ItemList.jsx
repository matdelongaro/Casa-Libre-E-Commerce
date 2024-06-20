import Item from "./Item"

function ItemList ({products}){
    return(
            <div className="grid grid-cols-4 gap-6">
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