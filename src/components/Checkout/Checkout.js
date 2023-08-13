import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Checkout.css'
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import Swal from 'sweetalert2';

const Checkout = () => {

  const {cart,totalPrice} = useContext(CartContext)
  const [orderId,setOrderId] = useState();
  const [client,setClient] = useState({
    Nombre: "",
    Email: "",
    Telefono:""
  })
  const {Nombre,Email,Telefono} = client;

  const handleInputChange = (e) => {
    if(e.target.name!=="EmailValidation"){
      setClient({
        ...client,
        [e.target.name]: e.target.value
    })
    console.log(client.Email)
    }else{
      setEmailValidation(e.target.value)
    }
}


const [emailValidation, setEmailValidation] = useState("");
const handleSubmit = (e) =>{
  e.preventDefault()
  if(Email===emailValidation){
    const total = totalPrice()
    const day = new Date()
    const data = {client,cart,total,day}
    generateOrder(data)
    console.log(data)
  }else{
    Swal.fire({
      icon: 'error',
      title: 'No podemos continuar',
      text: 'Por favor verificá la confirmación de Email',
    })
  }

}

const generateOrder = async (data) => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, "orders")
  const order = await addDoc(queryCollection, data)
  setOrderId(order.id)
}


  
  return (
    <>
      {!orderId && <form onSubmit={handleSubmit}>
          <div className='formbox'>
          <h2>Completá tus datos</h2>
            <FloatingLabel
              label="Nombre"
              className="mb-2"
            >
              <Form.Control type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} required className='label'/>
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-2">
              <Form.Control type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} required className='label'/>
            </FloatingLabel>
            <FloatingLabel label="Confirmar Email" className="mb-2">
              <Form.Control type="email" name="EmailValidation" placeholder='EmailValidation' value={emailValidation} onChange={handleInputChange} className='label'/>
            </FloatingLabel>
            <FloatingLabel label="Teléfono" className="mb-2">
              <Form.Control type="number" name="Telefono" placeholder='Teléfono' value={Telefono} onChange={handleInputChange} required className='label'/>
            </FloatingLabel>
            <Button type="submit">Confirmar compra</Button>
        </div>
      </form>
          
        
      }
      {orderId && <div className='container endOfPurchase'>
                <h1>¡Felicitaciones tu compra se realizo con exito!</h1>
                <h3>Tu ID de Compra es: {orderId}</h3>
            </div>}
    </>
  )
}

export default Checkout