import React, { useEffect, useState } from 'react'

const Fetch = () => {
    
    // CONSTRUCTOR 
    const [tasks, setTasks] = useState([]) // [] estado inicial
    const [newTask, setNewTask] = useState('');
    const [cargarndo, setCargando] = useState(true);

    const getTask = () => {
        // OBTENER LA LISTA DE POKEMONS
        //  dominio.com/api/pokemon
        // METHOD GET 
        fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then( respuesta => respuesta.json() ) // formato que queremos
        .then( respuesta => {
            setTasks(respuesta);
            setCargando(false);
        } ) // formato que queremos
    }
    
    const getDetailTask = (identificador) => {
        // OBTENER EL DETALLE DEL POKEMON
        //  dominio.com/api/pokemon/2
        // METHOD GET <-| PATCH
    }
    
    const addTask = () => {
        console.log('aqui voy a crear mi tarea')
        // CREAR EL POKEMON
        //  dominio.com/api/pokemon
        // METHOD POST 

        console.log(JSON.stringify({ userId: 1, title: 'mi nueva tarea', completed: true}))
        const options = {
            method: 'POST', // METODO GET, PUT, POST, DELETE
            headers: {
                'Content-Type': 'application/json' // => {task: nueva tarea, done: true }
                // 'Content-Type': 'application/x-www-form-urlencoded', => http://miulr.com/?task=nueva%20tarea&done=true
            },
            body: JSON.stringify({ userId: 1, title: 'mi nueva tarea', completed: true})
        }

        fetch("https://jsonplaceholder.typicode.com/todos", options)
        .then( respuesta => respuesta.json() ) // formato que queremos
        .then( respuesta =>{ 
        
            console.log([respuesta, ...tasks])
            setTasks([respuesta, ...tasks])
        
        }) // formato que queremos
        
    }

    const updateTask = (identificador = 1) => {
        // EDITAR EL POKEMON 
        //  dominio.com/api/pokemon/2
        // METHOD PUT 
        const options = {
            method: 'PUT', // METODO GET, PUT, POST, DELETE
            headers: {
                'Content-Type': 'application/json' // => {task: nueva tarea, done: true }
                // 'Content-Type': 'application/x-www-form-urlencoded', => http://miulr.com/?task=nueva%20tarea&done=true
            },
            body: JSON.stringify({ id: 1, userId: 1, title: 'mi nueva tarea', completed: true})
        }

        fetch("https://jsonplaceholder.typicode.com/todos/"+ identificador, options)
        .then( respuesta => respuesta.json() ) // formato que queremos
        .then( respuesta =>{ 
        
            console.log(respuesta)
            
        
        }) // formato que queremos
    }
    
    const deleteTask = (identificador) => {
        // ELIMINAR EL POKEMON 
        //  dominio.com/api/pokemon/2
        // METHOD DELETE 
        fetch("https://jsonplaceholder.typicode.com/users/todos/1")
        .then( respuesta => respuesta.json() ) // formato que queremos
        .then( respuesta => { // objeto que estamos eliminado 
           

            //la busqueda en el estado para excluirlo 

            // eliminar 


        } ) // formato que queremos

    }

    // FIN DEL CONSTRUCTOR

    useEffect(() => {
        // COMPONENDIDMOUNT 1 SOLA VEZ
        // OBTENER 1 sola vez 
        if(!tasks.length){
            getTask()
        }

    }, [tasks])// COMPONENDIDUPDATE 1 SOLA VEZ

    return (
        <div>
            <h2>Mi lista de Tareas</h2>
         
                <input value={newTask} onChange={ (event) => {
                    
                    event.preventDefault(); // eliminar el comporatmiento por defecto

                    setNewTask(event.target.value)
                } } />
                <button type="button" onClick={updateTask}>Agregar Tarea</button>
          
            {
            cargarndo? 'Cargando...' 
            : 
                <ul>
                    { tasks && tasks.map( (task, indice) => <li key={indice}>{task.title}</li> ) }
                </ul>
            }
        </div>
    )
}

export default Fetch


