import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = () => {

    const items = ['learn react', 'build app'];

    return(
        <div>
            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
            </ul>
        </div>
    )
}

const AppHeader = () => <h1>my toDo list</h1>

const SearchPanel = () =>{
    const SearchPanel = 'type here to search';
    return (
        <input type="text" placeholder={SearchPanel} />
    )
} 

const App = () => {

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}




ReactDOM.render(<App />, 
    document.getElementById('root'));