import PropTypes from 'prop-types';
import React from 'react';

export default function TodoItem(props) {
    return (
        <h3>{props.todoItemProps.title}</h3>
    );
}

TodoItem.propTypes = {
    todoItemProps: PropTypes.object.isRequired
}