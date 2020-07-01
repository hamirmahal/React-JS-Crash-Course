import React from 'react';

export default function AddTodo() {
    return (
        <form>
            <input name='newTodo'
            placeholder='I have to...' type='text' />
            <input type='submit' value='+' />
        </form>
    )
}