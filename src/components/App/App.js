import React, { Component } from 'react';


import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAdd from '../ItemAdd/ItemAdd';

import './App.css';


class App extends Component {
    constructor(){
        super()
        this.maxId = 100;
        this.state = {
            todoData: [
                { taskName: 'drink', importantForItem: false, id: 1 },
                { taskName: 'eat', importantForItem: false, id: 2 },
                { taskName: 'MAKE APP', importantForItem: true, id: 3 }
            ]
        };
        this.AddOneId = () => {
            let lastId = this.state.todoData.length - 1;
            let newId = ++lastId;
            console.log(newId);
            
        }
        this.deleteItem = (ItemIdDelete) => {
            this.setState((state)=>{
                const idX = state.todoData.findIndex((el) => el.id === ItemIdDelete);
                const newArr = [...state.todoData.slice(0, idX), ...state.todoData.slice(idX + 1)];
                return {
                    todoData: newArr
                }
            })
        }
        this.addOneTask = (text) => {
            // this.AddOneId();
            const newItem = {
                taskName: text, 
                importantForItem: false,
                id: this.maxId++
            }
            
            this.setState((state)=>{
                const newArr = [...state.todoData, newItem];
                return {
                    todoData: newArr
                }
            })   
        }
        this.toggleImportantMAIN = (id) =>{
            console.log(`Important ${id}`);   
        }
        this.toggleDoneMAIN = (id) =>{
            console.log(`Done ${id}`);
        }
    }



    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todoDataFromApp={this.state.todoData}
                    whichTaskDelete={this.deleteItem}
                    onToggleImportant={this.toggleImportantMAIN}
                    onToggleDone={this.toggleDoneMAIN}
                />
                <ItemAdd whichTaskAdd={this.addOneTask}/>
            </div>
        )
    }
}
export default App;