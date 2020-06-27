import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    console.log(props.todoProps);
    return props.todoProps.map( (todoElement)   =>  (
        <TodoItem todoItemProps={todoElement}
        key={todoElement.id}/>
    ));
}