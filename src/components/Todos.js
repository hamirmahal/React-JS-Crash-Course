import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    return props.todoProps.map( (todoElement, index) =>  (
        <TodoItem key={index}
        indexProp={index}
        removeTodoProp={props.removeTodoPropFromAppJs}
        todoElementProp={todoElement} />
    ));
}

Todos.propTypes = {
    removeTodoPropFromAppJs: PropTypes.func.isRequired,
    todoProps: PropTypes.array.isRequired
}