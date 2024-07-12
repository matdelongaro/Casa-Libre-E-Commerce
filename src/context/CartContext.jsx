import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInit = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) =>{
  
    const [carrito, setCarrito] = useState(carritoInit);

    const addToCart = (item, cantidad) => {
      const itemAdd = {...item, cantidad};
  
      const carritoDos = [...carrito];
      const productoExistente = carritoDos.find((producto) => producto.id === itemAdd.id);
  
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

  const vaciarCarrito = () =>{
    setCarrito([])

    
  }
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  return (
  <CartContext.Provider value={{carrito , addToCart , numeroCarrito, precioTotal, vaciarCarrito}}>
    {children}
  </CartContext.Provider>
  )
}