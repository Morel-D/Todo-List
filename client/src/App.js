import Todo from "./Components/Todo";
import React, { Components } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Edit from "./Components/Edit";


function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route  path="/" element ={<Todo />} />
          <Route path="/:id" element ={<Edit />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
