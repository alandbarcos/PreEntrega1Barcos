import React,{ useEffect,useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import productos from '../../productos.json'
import { useParams} from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
        try{
        const data = await new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(id ? productos.filter(item=> item.categoria === id) : productos)
        }, 2000);
        });
        setItem(data);
        }catch(error){
        console.log('Error:', error);
        }
    };
    fetchData();
    }, [id])

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