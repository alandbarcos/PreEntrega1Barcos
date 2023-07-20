import React from "react";
import { useState } from "react";

const ItemCount = () => {

    const [counter, setCounter] = useState(1);

    const incrementar = () => {
            setCounter(counter + 1);
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(
        <div>
            <h3>Cantidad</h3>
            <button onClick={decrementar} className="btn btn-secondary m-3">-</button>
            <span>{counter}</span>
            <button onClick={incrementar} className="btn btn-secondary m-3">+</button>
            
            
        </div>
    )
}

export default ItemCount;