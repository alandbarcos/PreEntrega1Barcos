import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  const {addToCart} = useContext(CartContext);
  const addItemAlert = () =>{
    Swal.fire({
      title: 'Entendido!',
      text: 'Agregaste "'+ item.name +'" al carrito',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
  })
  }

  const handleOnAdd = (count) => {
    addItemAlert()
    addToCart({ id: item.id, price: item.price, name: item.name, img: item.img }, count)

};
  return (
    <>
    <Link to={`/category/${item.category}`}>
        <button className="btn btn-primary categoryButton">Volver a {item.category}</button>
    </Link>
    
    <div className='row p-3'>
      
      <h1>Detalle de producto</h1>
      <div className='col-md-4 offset-md-4 p-3'>
          <img src={item.img} className='img-fluid'alt={item.name}/>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p> Precio: $ {item.price}</p>
          <ItemCount stock={item.stock} onAdd={handleOnAdd}/>
          <br/>
          <p>Disponible: {item.stock}</p>
      </div>
      </div>
    </>
  )
}

export default ItemDetail