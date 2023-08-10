import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div className='contCarrito'>
            <Link to="/cart">
            <img className= "imgCarrito"src="/carrito-icono.png" alt="Carrito"/>
            </Link>
            <span>0</span>
        </div>
    )
}

export default CartWidget;