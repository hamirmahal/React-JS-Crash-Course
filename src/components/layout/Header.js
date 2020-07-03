import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <h1 style   =   {   {   padding:    '10px'  }   }>
            TodoList from
            Traversy Media React JS Crash Course <br />
            <Link style={homeStyle} to='/'>Home</Link>
            {''} | {''}
            <Link style={homeStyle} to='/about'>About</Link>
        </h1>
    );
}

const homeStyle = {
    fontSize: '75%',
}