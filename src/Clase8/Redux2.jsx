import { useState } from "react";
import {createStore} from "redux";

const tasks = [
    {id:1, nombre:"Desayunar", completed:true},
    {id:2, nombre:"Almorzar", completed:true},
    {id:3, nombre:"Merendar", completed:false},
    {id:4, nombre:"Cenar", completed:false}
];

const taskReducer = (prevState = {filtered:tasks}, action) => {
    if (action.type === "SHOW_COMPLETE") {
        return {
            ...prevState,
            filtered: prevState.filtered.filter(item => item.completed)
        };
    } else if (action.type === "SHOW_ALL") {
        return {
            ...prevState,
            filtered: tasks
        }
    } else {
        return prevState;
    }
}

const store = createStore(taskReducer);

const Redux2 = () => {
    const [tareas, setStareas] = useState(store.getState());

    const mostrarCompletados = () => {
        const SHOW_COMPLETE = {
            type:"SHOW_COMPLETE"
        };

        store.dispatch(SHOW_COMPLETE);
    }

    const mostrarTodos = () => {
        const filterTask = (filter) => ({
            type:"SHOW_ALL",
            payload: filter
        });

        store.dispatch(filterTask('COMPLETE'));
    }

    store.subscribe(() => {
        setStareas(store.getState());
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={mostrarCompletados}>Completados</button> <button className="btn btn-primary" onClick={mostrarTodos}>Todos</button>
                    <ul>
                        {tareas.filtered.map (item => (
                            <li key={item.id}>{item.nombre}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Redux2;