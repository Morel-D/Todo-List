import React from "react";
import AddTodo from "./AddTodo";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';




const Todo = () => {

    const [texts, setText] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/Todo')
            .then((response) => {
                return response.data
            }).then((data) => {
                setText(data);
            })
    }, [])


    const handleDelete = (id) => 
    {
        axios.delete('http://localhost:5000/Todo/' + id);
        window.location.reload(true);
    }
    



  

    return ( 

        <div className="Todos">
            <div className="container center todo-app py-5">
    
            <div className="form">
                  <AddTodo />  
                </div>
                {texts && texts.map((todo) => (
                     <div className="card p-4 shadow-sm col-7" key={todo._id}>
                     <div className="">
                         <div className="text-start">
                         <label className="mx-2">Task {todo.id}</label>
                         </div>
                         <div className="row">
                             <div className="col text-start">
                             <span className="text-start">{todo.content} </span>
                             </div>
                             <div className="col text-end">
                                 <span className="text-start" onClick={() => { handleDelete(todo._id)} }><i className="bi bi-trash"></i></span>
                                 <span className="mx-3"><Link to={`/${todo._id}`}><i className="bi bi-pencil"></i></Link></span>
                             </div>
                         </div>
                     </div>
             </div>
                ))
                }
                <div className="todos py-3">
                </div>
            </div>
        </div>

     );
}
 
export default Todo;