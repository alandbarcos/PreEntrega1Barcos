import { createContext, useState } from "react";

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

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
                localStorage.setItem("cart", JSON.stringify(newCart));
        
    }
    console.log(cart)

    const removeFromCart = (productId) =>{
        const updatedCart = cart.filter((item) => item.id !== productId)
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        };
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
    <CartContext.Provider value={{cart,addToCart,quantityOnCart,totalPrice,clearCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export const CartContext = createContext();