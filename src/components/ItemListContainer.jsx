import { useEffect, useState } from "react";
import getProducts from "./getProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(){

    

    const [products, setProducts] = useState([])
    const category = useParams().category

    
    

    useEffect(() =>{
        getProducts()
        .then((res) =>{
            if (category){
                setProducts(res.filter((product) => product.category === category))
            }else{
                setProducts(res) 
            }
            
        })
    }, [category])

    

    return (
            <div className="m-10 bg-white rounded">
                <ItemList products = {products}/>
            </div>
        
        
    )
}

export default ItemListContainer