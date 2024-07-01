function Footer(){
    return(
        <div className="p-4 bg-white">
            <div className="container px-4 mx-auto">
                <ul className="flex justify-center pb-2">
                    <li className="px-3">Trabajá con nosotros</li>
                    <li  className="px-3">Términos y condiciones</li>
                    <li  className="px-3">Accesibilidad</li>
                </ul>
            </div>
            <div className="container px-4 mx-auto">
                <ul className="flex justify-center pb-2">
                    <li className="px-3">Ayuda</li>
                    <li className="px-3">Defensa del Consumidor</li>
                    <li className="px-3">Libro de quejas online</li>
                </ul>
            </div>
            <div className="py-2 text-center">
                <p className="text-gray-500">Copyright © 2024 Casa Libre S.R.L.</p>
            </div>
            <div className="pb-2 text-center">
                <p className="text-gray-500">Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
            </div>
        </div>
    )
}

export default Footer

