import React from 'react'
import ComponentE from './ComponentE'

const ComponentD = () => {
    return (
        <div style={{ padding: "30px", margin: "15px", border: "3px dashed black" }}>
            <h2 style={{backgroundColor: 'black', color: "white"}}>
                Componente D
            </h2>

            <ComponentE />
        </div>
    )
}

export default ComponentD
