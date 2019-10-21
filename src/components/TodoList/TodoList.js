import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todoDataFromApp, onDeleted}) => {

    const elements = todoDataFromApp.map(item => {
        return (
            <li className="list-group-item" key={item.id}>
                <TodoListItem 
                label={item.taskName} 
                important={item.importantForItem}
                onDeleted={()=>{console.log('deleted');
                }}
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
