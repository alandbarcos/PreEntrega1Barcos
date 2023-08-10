import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

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
            <button onClick={decrementar} className="btn btn-secondary m-3">-</button>
            <span>{counter}</span>
            <button onClick={incrementar} className="btn btn-secondary m-3">+</button>
            <Button onClick={() => onAdd(quantity)} variant="primary">Añadir al carrito</Button>
        </div>
    )
}

export default ItemCount;