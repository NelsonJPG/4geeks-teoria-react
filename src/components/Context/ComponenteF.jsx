import React, { useContext }  from 'react'
import { UsuarioContext } from '.'

const ComponentF = () => {
    const context = useContext(UsuarioContext) 
    console.log(context)
    return (
        <h2 style={{backgroundColor: 'orange'}}>
            Componente F {context}
        </h2>
    )
}

export default ComponentF
