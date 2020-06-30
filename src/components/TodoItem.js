import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function TodoItem(props) {
    const [isChecked, setChecked] = useState(false);
    const getStyle = () => {
        return {
            textDecoration: isChecked && 'line-through'
        }
    }
    function handleCheckboxChange(event) {
        setChecked(event.target.checked);
    }
    return (
        <h3 style={getStyle()}>
            <input checked={isChecked}
            onChange={handleCheckboxChange}
            type='checkbox' />
            {props.todoItemProps.title} {''}
            <button style={stylingForButton}>🗑</button>
        </h3>
    );
}

const stylingForButton = {
    border: 'none',
}

TodoItem.propTypes = {
    todoItemProps: PropTypes.object.isRequired
}