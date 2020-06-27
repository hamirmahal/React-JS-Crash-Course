import React from 'react';

export default function TodoItem(props) {
    return (
        <h1>{props.todoItemProps.title}</h1>
    );
}