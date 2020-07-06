import PropTypes from 'prop-types';
import React from 'react';

export default function TodoItem(props) {
    const { completed, title } = props.todoElementProp;
    const getStyle = () => {
        return {
            textDecoration: completed && 'line-through'
        }
    }
    return (
        <h3 style={getStyle()}>
            <label>
                <input 
                    checked =   {   completed   }
                    onChange=   {   ()  =>  
                        props.change(props.indexProp) }
                    type='checkbox' />  {title} {''}
            </label>
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
    change: PropTypes.func.isRequired,
    indexProp: PropTypes.number.isRequired,
    removeTodoProp: PropTypes.func.isRequired,
    todoElementProp: PropTypes.object.isRequired
}