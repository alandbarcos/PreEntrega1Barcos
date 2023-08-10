import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
  const {addToCart} = useContext(CartContext);
  const handleOnAdd = (count) => {

    addToCart({ id: item.id, price: item.price, name: item.name, img: item.img }, count)
};
  return (
    <div className='row p-3'>
      <h1>Detalle de producto</h1>
      <div className='col-md-4 offset-md-4 p-3'>
          <img src={item.img} className='img-fluid'alt={item.name}/>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p> Precio: $ {item.price}</p>
          <ItemCount stock={item.stock} onAdd={handleOnAdd}/>
      </div>
      </div>
  )
}

export default ItemDetail