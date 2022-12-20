import React from "react";
import AddTodo from "./AddTodo";


const Todo = ({ todos, deleteTodo }) => {


    const todoList = todos.length ? (
        todos.map((todo) => {
            return (
            <div className="collection-item" key={todo.id}>
                <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
            </div>
           )
        })
    ) : (
           
        <p className="center">Empty agenda</p>
       
    )


    return ( 

        <div className="Todos">
            <div className="container center todo-app py-5">
                <div className="todos collection">
                   { todoList }
                 </div>
                <div className="form">
                  <AddTodo />  
                </div>
            </div>
        </div>

     );
}
 
export default Todo;