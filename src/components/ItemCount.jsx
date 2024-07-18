
function ItemCount({cantidad, handleRestar , handleSumar , handleAgregar}){

    
    
    return(
        <div>
            <div className="flex flex-col">
                <div className="flex justify-center p-3 align-center">
                <button onClick={ handleRestar } className="px-4 py-2 font-bold text-white uppercase bg-blue-950 rounded hover:bg-blue-900">-</button>
                <p className="px-4 py-2 font-bold text-center">{cantidad}</p>
                <button onClick={ handleSumar } className="px-4 py-2 font-bold text-white uppercase bg-blue-950 rounded hover:bg-blue-900">+</button>
                </div>
                
                <button onClick={handleAgregar} className="px-4 py-2 font-bold text-white uppercase bg-blue-950 rounded hover:bg-blue-900">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount