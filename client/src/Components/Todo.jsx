import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import { Link } from 'react-router-dom';
import { deleteUser } from "./useSlice";



const Todo = () => {

    const todos = useSelector(Store => Store.users)
    // console.log("This", todos);
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id}));
    }

    const todoList = todos.length ? (
        todos.map((todo) => {
            return (
            <div className="card p-4 shadow-sm col-7" key={todo.id}>
                    <div className="">
                        <div className="text-start">
                        <label className="mx-2">Task {todo.id}</label>
                        </div>
                        <div className="row">
                            <div className="col text-start">
                            <span className="text-start">{todo.content} </span>
                            </div>
                            <div className="col text-end">
                                <span className="text-start" onClick={() => {handleDelete(todo.id)}}><i className="bi bi-trash"></i></span>
                                <span className="mx-3"><Link to={`/${todo.id}`}><i className="bi bi-pencil"></i></Link></span>
                            </div>
                        </div>
                    </div>
            </div>
           )
        })
    ) : (
           
        <p className="center">Empty agenda</p>
       
    )


    return ( 

        <div className="Todos">
            <div className="container center todo-app py-5">
    
            <div className="form">
                  <AddTodo />  
                </div>
                
                <div className="todos py-3">
                  { todoList }
                </div>
            </div>
        </div>

     );
}
 
export default Todo;