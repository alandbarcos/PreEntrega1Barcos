import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Cart.css'

const Cart = () => {

  const {cart,totalPrice,clearCart,removeFromCart} = useContext(CartContext);

  const handleRemove = (prod) =>{
    Swal.fire({
      title: 'Eliminar',
      text: '¿Desea quitar "' + prod.name + '" del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
  }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire({
          title: 'Solucionado!',
          text: 'Eliminaste "'+ prod.name +'"',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
      })
      removeFromCart(prod.id)
      }
  })
  }
  const handleClear = () =>{
    
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se eliminarán todos los productos del carrito',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
  }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        localStorage.setItem("cart", JSON.stringify([]));
      }
  })

  }
  const navigate = useNavigate();
  const finalizePurchase = () =>{
    Swal.fire({
      title: '¿Deseas finalizar tu compra?',
      text: 'El total a pagar es de $'+ totalPrice(),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
  }).then((result) => {
      if (result.isConfirmed) {
        navigate("/checkout")
      }
  })
  }

  return (
    <div className='column' id="cart">
      <h1>{`Tenes ${cart.length} productos agregados a tu carrito.`}</h1>
          <div className='cartcontainer'>
            {
            cart.map((prod) => (
                <div key={prod.id} className='cartproduct'>
                    <br />
                      <p>{prod.name}</p>
                      <img src={prod.img} alt="product" width="50px" height="50px"/>
                      <p>Precio unit: ${prod.price}</p>
                      <p>Precio total: ${prod.price * prod.quantity}</p>
                      <p>Cant: {prod.quantity}</p>
                      <button className="btn btn-outline-danger" onClick={() => handleRemove(prod)}>Eliminar</button>
                    <br />
                    <hr />
                </div>
              
            ))
            }
          </div>
        {  
            cart.length > 0 ?
            <>
                <h2>Precio total: ${totalPrice()}</h2>
                <div className='buttonContainer'>
                  <button className="btn btn-warning" onClick={handleClear}>Vaciar</button>
                  <button className="btn btn-success" onClick={finalizePurchase}>Finalizar compra</button>
                </div>
                
            </> :
            <h2>El carrito está vacío :D</h2>
        }
        
    </div>
  )
}

export default Cart