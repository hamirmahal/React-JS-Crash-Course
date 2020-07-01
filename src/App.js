import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import React, { useState } from 'react';
import Todos from './components/Todos';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      isCompleted: false,
      title: 'Fly to Cathedral Cove'
    },
    {
      id: 2,
      isCompleted: false,
      title: 'Swim to Switzerland'
    },
    {
      id: 3,
      isCompleted: false,
      title: 'Travel to Japan from California by foot'
    }
  ]);
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AddTodo />
        <Todos  removeTodoPropFromAppJs={removeTodo}
                todoProps={todos}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
