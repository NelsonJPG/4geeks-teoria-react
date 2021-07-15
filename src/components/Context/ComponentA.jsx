import React from 'react'
import ComponentC from './ComponentC'

const ComponentA = () => {
    const primerNombre = "Nelson"
    return (
        <div style={{ padding: "30px", margin: "15px", border: "3px dashed green" }}>
            <h2 style={{backgroundColor: 'green'}}>
                Componente A 
            </h2>
            <ComponentC nombre={primerNombre} />
        </div>

    )
}

export default ComponentA
