import React from 'react';
import Todos from './components/Todos';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    {
      id: 1,
      completed: false,
      title: 'Fly to Cathedral Cove'
    },
    {
      id: 2,
      completed: false,
      title: 'Swim to Switzerland'
    },
    {
      id: 3,
      completed: false,
      title: 'Travel to Japan from California by foot'
    }
  ]
  console.log(todos);
  return (
    <div className="App">
      <header className="App-header">
        <Todos todoProps={todos}/>
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
