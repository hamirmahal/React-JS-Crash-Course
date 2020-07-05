import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function AddTodo( { addTodoMethodProp } ) {
    const [newTodo, setNewTodo] = useState('');
    function handleNewTodo(newTodoEvent) {
        setNewTodo(newTodoEvent.target.value);
    }
    function handleSubmit(buttonSubmitEvent) {
        buttonSubmitEvent.preventDefault();
        addTodoMethodProp(newTodo);
        setNewTodo('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='I have to...' type='text'
            onChange={handleNewTodo} value={newTodo} />
            <input type='submit' value='+' />
        </form>
    )
}

AddTodo.propTypes = {
    addTodoMethodProp: PropTypes.func.isRequired
}