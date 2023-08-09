import React,{ useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { querydb } from '../../firebase/config'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const {categoria} = useParams();

    useEffect(()=>{
        const productosRef = collection(querydb, "productos");
        const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;
        getDocs(q)
            .then((res) =>{
                setItem(
                    res.docs.map((item) => {
                        return {...item.data(),id:item.id}
                    })
                );
            })
    }, [])

    return (
    <div className='container'>
        <div className='row'>
            <h1>{id}</h1>
        <ItemList item={item}/>
        </div>
        
    </div>
    )
}

export default ItemListContainer