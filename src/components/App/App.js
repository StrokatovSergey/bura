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
        this.state = {
            todoData: [
                { taskName: 'drink', importantForItem: false, id: 1 },
                { taskName: 'eat', importantForItem: false, id: 2 },
                { taskName: 'MAKE APP', importantForItem: true, id: 3 }
            ]
        };
        this.AddOneId = () => {
            let lastId = this.state.todoData.length - 1;
            console.log(this.state.todoData[lastId].id);
            
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
        this.addOneTask = () => {
            this.AddOneId()
            this.setState((state)=>{
                const newitem = {
                    taskName: 'drink', 
                    importantForItem: false,
                     id: 10
                }
                const newArr = [...state.todoData ,newitem];
                return {
                    todoData : newArr
                }
            })
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
                />
                <ItemAdd addTask={this.addOneTask}/>
            </div>
        )
    }
}
export default App;