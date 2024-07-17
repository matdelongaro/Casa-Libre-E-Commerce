import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../firebase/data"



function ItemListContainer(){

    

    const [productos, setProductos] = useState([])
    const category = useParams().category

    
    

    useEffect(() =>{
        const productosDB = collection( db, "productos")

        const q = category ? query(productosDB , where("category", "==", category)) : productosDB
        getDocs(q)
            .then((resp) => {
              

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id} 
                    })
                        
                )
            })
 
    }, [category])

    

    return (
            <div className="m-10 bg-white rounded">
                <ItemList productos = {productos}/>
            </div>
        
        
    )
}

export default ItemListContainer