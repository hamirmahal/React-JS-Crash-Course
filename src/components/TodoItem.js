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
            <label> <input checked={isChecked}
            onChange={handleCheckboxChange}
            type='checkbox' />
            {props.todoElementProp.title} {''} </label>
            <button onClick =   {   ()  =>
            props.removeTodoProp(props.indexProp)   }
            style={stylingForButton}>   🗑  </button>
        </h3>
    );
}

const stylingForButton = {
    backgroundColor: '#282c34',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '100%'
}

TodoItem.propTypes = {
    indexProp: PropTypes.number.isRequired,
    removeTodoProp: PropTypes.func.isRequired,
    todoElementProp: PropTypes.object.isRequired
}