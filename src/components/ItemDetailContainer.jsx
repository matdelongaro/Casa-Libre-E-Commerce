import { useEffect, useState } from "react"
import { filterProduct } from "./getProducts"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer({itemId}){

    const [item , setItem] = useState(null)

    useEffect(() => {
        filterProduct(itemId)
        .then((res) => {
            setItem(res)
        })
    }, [itemId])

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer