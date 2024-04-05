import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import CardTodo from './CardTodo';

const TodoComponent = () => {
    const [todos,setTodos]=useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response=>{
            console.log(response.data)
            setTodos(response.data)

        })
        .catch(error=>{
            console.log(error)
        })

    }, []);
    return (
        <div className="container-fluid">
            <h1 className="mt-5 mb-4">Todos</h1>
            <div className="row">
                {
                    todos.map(todo => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={todo.id} >
                            <CardTodo todo={todo}></CardTodo>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default TodoComponent;
