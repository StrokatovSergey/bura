import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todoDataFromApp }) => {

    const elements = todoDataFromApp.map(item => {
        return (
            <li className="list-group-item" key={item.id}>
                <TodoListItem 
                label={item.taskName} important={item.importantForItem}
                /></li>
        )
    })

    return (
        <div>
            <ul className="list-group todo-list" >
                {elements}
            </ul>
        </div>
    )
}


export default TodoList
