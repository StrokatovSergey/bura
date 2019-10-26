import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done, important}) => {
    return (
        <div>
            <h1>TODOLIST</h1>
            <h4>Total: {todo}, done: {done}, important: {important}</h4>
        </div>
    )
}

export default AppHeader
