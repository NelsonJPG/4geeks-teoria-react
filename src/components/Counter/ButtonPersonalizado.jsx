import React from 'react'

const ButtonPersonalizado = ({ titulo, accion }) => (
    <button onClick={accion}>{titulo}</button>
)


export default ButtonPersonalizado
