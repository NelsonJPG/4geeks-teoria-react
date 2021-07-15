import React from 'react'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

const ComponentB = () => {
    return (
        <div style={{ padding: "30px", margin: "15px", border: "3px dashed steelblue" }}>
            <h2 style={{backgroundColor: 'steelblue'}}>
                Componente B
            </h2>

            <ComponentD />
        </div>
    )
}

export default ComponentB
