
function Item({product}){
    return(

                    <div>
                        <h2>{product.title}</h2>
                        <h3>$ {product.price}</h3>
                        <p>{product.description}</p> 
                        {/* -- minima descripcion, en detalle se explaya */}
                        <a href={`/item/${product.id}`}> Ver más</a>
                    </div>
        
    )
}

export default Item