import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({item}) => {
  return (
    <div className='row p-3'>
      <h1>Detalle de producto</h1>
      <div className='col-md-4 offset-md-4 p-3'>
          <img src={item.img} className='img-fluid'alt={item.nombre}/>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p> Precio: $ {item.price}</p>
          <ItemCount/>
          <Button variant="primary">Añadir al carrito</Button>
      </div>
      </div>
  )
}

export default ItemDetail