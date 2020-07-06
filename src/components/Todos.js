import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    return props.todoProps.map( (todoElement, index) =>  (
        <TodoItem change = {props.changeTodo} key={index}
        indexProp={index}
        removeTodoProp={props.removeTodoPropFromAppJs}
        todoElementProp={todoElement} />
    ));
}

Todos.propTypes = {
    changeTodo: PropTypes.func.isRequired,
    removeTodoPropFromAppJs: PropTypes.func.isRequired,
    todoProps: PropTypes.array.isRequired
}