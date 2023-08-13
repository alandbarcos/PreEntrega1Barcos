import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {quantityOnCart} = useContext(CartContext)
    return (
        <div className='contCarrito'>
            <Link to="/cart">
            <img className= "imgCarrito"src="/carrito-icono.png" alt="Carrito"/>
            </Link>
            <span className='countNumber'>{quantityOnCart()}</span>
        </div>
    )
}

export default CartWidget;