import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import { HashRouter, Route } from 'react-router-dom';
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
  const addTodo = title => {
    const newTodos = [...todos, {
      id: 4, isCompleted: false, title
    }];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodoMethodProp = {addTodo} />
              <Todos removeTodoPropFromAppJs
                = {removeTodo} todoProps={todos}/>
            </React.Fragment>
          )} />
          <Route component={About} path='/about' />
          <img src={logo} className="App-logo"
          alt="logo" />
          <p>
            Edit <code>src/App.js</code> and
            save to reload.
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
    </HashRouter>
  );
}

export default App;
