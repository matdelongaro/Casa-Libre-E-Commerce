import { useEffect, useState } from "react";
import getProducts from "./getProducts";
import ItemList from "./ItemList";

function ItemListContainer(){

    

    const [products, setProducts] = useState([])
    
    

    useEffect(() =>{
        getProducts()
        .then((res) =>{
            setProducts(res) 
        })
    }, [])

    

    return (
        <div>
            <ItemList products = {products}/>
        </div>
        
    )
}

export default ItemListContainer