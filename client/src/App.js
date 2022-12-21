import Todo from "./Components/Todo";
import React, { Components } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Details from "./Components/Details";
import Edit from "./Components/Edit";


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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route  path="/" element ={<Todo  todos={todos} deleteTodo ={ deleteTodo } />} />
          <Route path="/aboutUs" element={<About />}/>
          <Route path="/details" element={<Details />} />
          <Route path="/:id" element ={<Edit />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
