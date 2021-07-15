import { useState } from 'react'
import CounterGroupButtons from './CounterGroupButtons'


const Counter = () => {
    const [total, setTotal] = useState(0) // MI ESTADO
    const [cargar,] = useState(false);


    //********************** METODOS */
   

    const decrementar = (actual) => {
        setTotal( (totalPrevio) => totalPrevio - actual)
    }

    const handleSumaEspera = (valor) => {

      

    }

   
    return (
        <>
            <h2>Contador { cargar? 'Cargando...' : total }</h2>
            <CounterGroupButtons 
                // MIS PROPS
                resultado={total} 
                suma={handleSumaEspera} 
                resta={decrementar} 
                titulo="Mis Botones" 
            />
        </>
    )
}

export default Counter
