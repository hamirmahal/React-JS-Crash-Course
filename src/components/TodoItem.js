import PropTypes from 'prop-types';
import React from 'react';

export default function TodoItem(props) {
    const getStyle = () => {
        if (props.todoItemProps.isCompleted)
            return {
                textDecoration: 'line-through'
            }
        return {
            borderBottom: '1px dotted'
        }
    }
    return (
        <h3 style={getStyle()}>
            {props.todoItemProps.title}
        </h3>
    );
}

TodoItem.propTypes = {
    todoItemProps: PropTypes.object.isRequired
}