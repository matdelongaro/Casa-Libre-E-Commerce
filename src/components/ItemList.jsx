import Item from "./Item"

function ItemList ({products}){
    return(
            <div className="m-10 bg-white rounded ">
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