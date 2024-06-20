import { useEffect, useState } from "react"
import { filterProduct } from "./getProducts"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer(){

    const [item , setItem] = useState(null)
    const id = useParams().id;


    useEffect(() => {
        filterProduct(Number(id))
        .then((res) => {
            setItem(res)
        })
    }, [id])

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer