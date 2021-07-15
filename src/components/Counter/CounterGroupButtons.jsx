import React, {useEffect} from 'react'
import ButtonPersonalizado from './ButtonPersonalizado'

const CounterGroupButtons = ({ resultado, suma, resta }) => {

    return (
        <>
        <h4>Titulo 2 {resultado}</h4>
        <ul>
            <li>
                <ButtonPersonalizado titulo="Suma 3" accion={() => suma( 3 ) } />
            </li>
            <li>
                <ButtonPersonalizado titulo="Suma 2" accion={() => suma( 2 ) } />
            </li>
            <li>
                <ButtonPersonalizado titulo="Resta 1" accion={() => resta( 1 ) } />
            </li>
            <li>
            <ButtonPersonalizado titulo="Muestra un Alerta" accion={() => alert('Hola soy un alerta') } />
            </li>
        </ul>
        </>
    )
}

export default CounterGroupButtons
