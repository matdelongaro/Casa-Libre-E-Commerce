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
            <div>
               
                    <div className="grid h-64 bg-gradient-to-b from-blue-400 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                        <div className="flex flex-col pl-32 justify-evenly">
                            <p className="font-bold text-blue-950">Del 15 al 24 de Julio</p>
                            <div className="text-3xl font-bold text-blue-950">
                                <p>OFERTAS </p>
                                <p>DE VACACIONES</p>
                            </div>
                            <p className="font-semibold text-blue-950">Hasta el 24/07/24</p>
                        </div>
                        <div className="flex flex-col items-center justify-evenly">
                            <div className="px-16 w-80">
                                <div className="flex items-center p-2 mb-3 text-white rounded-full bg-blue-950">
                                    <p className="mx-1 font-semibold">HASTA</p>
                                    <p className="text-3xl font-bold">40% </p>
                                    <p className="text-3xl">OFF</p>
                                </div >
                                <div className="flex items-center p-2 bg-white rounded-full text-blue-950">
                                    <p className="mx-1 font-semibold">HASTA</p>
                                    <p className="text-3xl font-bold">40% </p>
                                    <p className="text-3xl">OFF</p>
                                </div >
                            </div> 
                        </div>
                        
                    </div>
               
                
                 <div className="mx-8 my-4 bg-white rounded">
                    <ItemList productos = {productos}/>
                </div>
            </div>
           
        
        
    )
}

export default ItemListContainer