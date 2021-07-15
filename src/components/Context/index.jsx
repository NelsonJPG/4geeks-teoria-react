import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

export const  UsuarioContext = React.createContext();

const Contexto = () => {
    let segundoNombre = "Jean Pierre"
    return (
        <div>
            <h2>Contexto {segundoNombre}</h2>
            <ComponentA />
            <UsuarioContext.Provider value={segundoNombre} >
                <ComponentB />
            </UsuarioContext.Provider>
        </div>
    )
}

export default Contexto
