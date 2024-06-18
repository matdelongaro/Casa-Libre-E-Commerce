
function ItemDetail({item}){
    return(
        <div>
            <div>
                <h2>{item.title}</h2>
                <h3>$ {item.price}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail