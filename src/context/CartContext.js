import { createContext, useState } from "react";

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const addedProduct = {...item,quantity};
        const newCart = [...cart];
        const isInCart = newCart.find((producto) => producto.id === addedProduct.id);
        if (isInCart) {
                    isInCart.quantity += quantity;
                    console.log("Está en el carrito")
                } else {
                    newCart.push(addedProduct);
                    console.log("Nuevo producto agregado al carrito")
                }
                setCart(newCart);
        console.log(cart)

    }

    const quantityOnCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    const clearCart = () => {
        setCart([]);
    }
    

  return (
    <CartContext.Provider value={{cart,addToCart,quantityOnCart,totalPrice,clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export const CartContext = createContext();