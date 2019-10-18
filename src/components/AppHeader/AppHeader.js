import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done}) => {
    return (
        <div>
            <h1>my toDo list</h1>
            <h3>{todo} more to do, {done} done</h3>
        </div>
    )
}

export default AppHeader
