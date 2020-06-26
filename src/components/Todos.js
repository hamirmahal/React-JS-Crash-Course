import React from 'react';

export default function Todos(props) {
    return (
        <h1>
            {props.todoProps[0].id}
            . {props.todoProps[0].title}
            <br /> {props.todoProps[1].id}
            . {props.todoProps[1].title}
            <br /> {props.todoProps[2].id}
            . {props.todoProps[2].title}
        </h1>
    );
}