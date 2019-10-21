import React from 'react';


import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

import './App.css';


const App = () => {


    const todoData = [
        { taskName: 'drink', importantForItem: false, id: 1 },
        { taskName: 'eat', importantForItem: false, id: 2 },
        { taskName: 'MAKE APP', importantForItem: true, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList 
            todoDataFromApp={todoData} />
        </div>
    )
}

export default App;