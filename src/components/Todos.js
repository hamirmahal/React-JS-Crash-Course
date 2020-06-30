import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    return props.todoProps.map( (todoElement)   =>  (
        <TodoItem todoItemProps={todoElement}
        key={todoElement.id}/>
    ));
}

Todos.propTypes = {
    todoProps: PropTypes.array.isRequired
}