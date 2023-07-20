import { useState } from "react";

function useCount(valorInicial=0) {

    const [contador,setContador] = useState(valorInicial)
    const incrementar=()=>{
        setContador(contador+1);
    }

    const decrementar=()=>{
        setContador(contador-1);
    }
    return (contador,incrementar,decrementar)
}

export default useCount;