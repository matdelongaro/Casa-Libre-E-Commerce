import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext();

const carritoInit = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) =>{
  
    const [carrito, setCarrito] = useState(carritoInit);

    const addToCart = (item, cantidad) => {
      const itemAdd = {...item, cantidad};
  
      const carritoDos = [...carrito];
      const productoExistente = carritoDos.find((producto) => producto.id === itemAdd.id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado Al Carrito",
        showConfirmButton: false,
        timer: 1500
      });
      
      
    
  
      if(productoExistente){
          productoExistente.cantidad = productoExistente.cantidad + cantidad;
          setCarrito(carritoDos)
      }else{
          setCarrito([...carrito, itemAdd])
      }


    }
  

  const numeroCarrito = () =>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }
  
  const precioTotal = () =>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
  }
  const envio = () =>{
    return carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.price) *0.1, 0)
  }
  const totalCompra = () => {
    return carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.price) + (prod.cantidad * prod.price)*0.1  , 0)
  }

  const vaciarCarrito = () =>{
    setCarrito([])
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se eliminaron los productos del carrito",
      showConfirmButton: false,
      timer: 1500
    });

    
  }
  

  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  return (
  <CartContext.Provider value={{carrito , addToCart , numeroCarrito, precioTotal, vaciarCarrito, envio, totalCompra}}>
    {children}
  </CartContext.Provider>
  )
}