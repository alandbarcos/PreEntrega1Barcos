import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'
import { querydb } from '../../firebase/config'
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const docRef = doc(querydb, 'productos', id)
    getDoc(docRef)
      .then((res) =>{
        setItem(
          {...res.data(),id:res.id}
          )
      })
}, [id])

  return (
    <div className='container'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer