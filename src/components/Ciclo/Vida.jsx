import React, { useEffect } from 'react'

const Vida = () => {
    console.log("constructor")

    useEffect(() => {
        console.log("montaje")

        console.log('actualizacion')

        return () => console.log('desmontaje')
    }, [])

    console.log("render")
    return (
        <div>
            <h2>Hola Mundo</h2>
        </div>
    )
}

export default Vida
