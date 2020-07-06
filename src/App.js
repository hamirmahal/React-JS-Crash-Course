import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import { HashRouter, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = title => {
    fetch('https://jsonplaceholder.typicode.com/todos',
      { method: 'POST'  ,
        body: JSON.stringify( {
          userId: 1, title, completed: false  } ) ,
        headers: {  "Content-type":
          "application/json; charset=UTF-8"}  }
    ).then(r=>r.json()).then(j=>setTodos([...todos,j]))
  }
  const changeTodoStatus = i => {
    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  }
  const removeTodo = i => {
    fetch(
    `https://jsonplaceholder.typicode.com/todos/${i}`, 
    { method: 'DELETE'  } ).then(response =>  {
      const newTodos = [...todos];
      newTodos.splice(i, 1);
      setTodos(newTodos);                     } );
  }
  useEffect(() => {
    fetch(
  'https://jsonplaceholder.typicode.com/todos?_limit=9'
    ).then(r => r.json()).then(json => setTodos(json));
  }, [])
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodoMethodProp = {addTodo} />
              <Todos changeTodo = {changeTodoStatus}
              removeTodoPropFromAppJs = {removeTodo}
              todoProps={todos}/>
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
