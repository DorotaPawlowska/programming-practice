import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333333',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '10px'
}

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none'
}

export default Header;