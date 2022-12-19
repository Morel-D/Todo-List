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
        <React.Fragment>
             <div className="todos collection">
            { todoList }
        </div>
        <div className="form">
              <AddTodo />  
        </div>
       </React.Fragment>
     );
}
 
export default Todo;