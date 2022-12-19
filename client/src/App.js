import Todo from "./Components/Todo";
import React, { Components } from 'react';


function App() {


  const todos = [
    { id: 1, content: "Buy some milk for the breakfast" },
    { id: 2, content: "Play video games all day" },
    { id: 3, content: "Go to the gym" },

  ]
  

  const deleteTodo = (id) => {
    const list = todos.filter((todo) => {
      return todo.id !== id
    });

    return list;
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className="container center todo-app py-5">
        <h2 className="pink-text"><b>Todo List</b></h2>
        <Todo  todos={todos} deleteTodo ={ deleteTodo } />
      </div>

    </div>
  );
}

export default App;
