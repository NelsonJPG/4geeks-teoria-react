import React from 'react'

import ComponentF from './ComponenteF'

const ComponentE = () => {

    return (
        <div style={{ padding: "30px", margin: "15px", border: "3px dashed purple" }}>
            <h2 style={{backgroundColor: 'purple'}}>
                Componente E
            </h2>

            <ComponentF />
        </div>
    )
}

export default ComponentE
