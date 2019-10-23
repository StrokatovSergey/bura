import React from 'react';
import  './ItemAdd.css';

const ItemAdd = ({ addTask }) => {
    return (
        <div>
            <input type="text"/>
            <button onClick={addTask}>Add Task</button>
        </div>
        
    )
}

export default ItemAdd;