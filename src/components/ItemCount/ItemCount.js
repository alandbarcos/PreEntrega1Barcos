import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({stock,onAdd}) => {

    const [counter, setCounter] = useState(1);

    const incrementar = () => {
        if(counter<stock){
            setCounter(counter + 1);
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }
    const quantity=counter;
    return(
        <div>
            <h3>Cantidad</h3>
            <div className="count">
                <div>
                    <button onClick={decrementar} className="btn btn-secondary m-3">-</button>
                    <span>{counter}</span>
                    <button onClick={incrementar} className="btn btn-secondary m-3">+</button>
                </div>
                <Button onClick={() => onAdd(quantity)} variant="light">Añadir al carrito</Button>
            </div>
            
        </div>
    )
}

export default ItemCount;