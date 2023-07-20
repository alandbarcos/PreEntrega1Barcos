import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='contCarrito'>
            <img className= "imgCarrito"src="/carrito-icono.png" alt="Carrito"/><span>0</span>
        </div>
    )
}

export default CartWidget;