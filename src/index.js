import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/item-status-filter';



import './index.css';


const App = () => {


    const todoData = [
        { taskName: 'drink', importantForItem: false, id: 1 },
        { taskName: 'eat', importantForItem: false, id:2 },
        { taskName: 'MAKE APP', importantForItem: true, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todoDataFromApp={todoData} />
        </div>
    )
}




ReactDOM.render(<App />,
    document.getElementById('root'));